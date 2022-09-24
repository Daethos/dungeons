import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';
import UserProfile from '../UserProfile/UserProfile';
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import ApiMonsters from "../../components/ApiMonsters/ApiMonsters";
import UserMonsters from "../../components/UserMonsters/UserMonsters";
import ApiMonsterDetails from "../../components/ApiMonsterDetails/ApiMonsterDetails";
import ApiMonsterData from "../../components/ApiMonsterData/ApiMonsterData";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo


  // const [monsterData, setMonsterData] = useState(null);
  const [monstahUrl, setMonstahUrl] = useState('');

  // const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/';

  // useEffect(() => {
  //   async function fetchMonsters() {
  //     try {
  //       const response = await fetch(monsterUrl);
  //       console.log(response);
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data.results, '<- Monster Data!');
  //         // setMonsterData(data.results);
  //         let monsterArr = [];
  //         let monsterUrls = [];
  //         monsterArr = data.results;
  //         // console.log(monsterArr,'<- monsterArr Post Set State')
  //         monsterArr.forEach((monster) => {
  //             const monstah = {
  //               key: monster.index,
  //               name: monster.name,
  //               index: monsterUrl+monster.index,
  //             }
  //             // console.log(monstah, '<- New Monstah to consume!')
  //             monsterUrls.push(monstah);  
  //             // console.log(monsterUrls, '<- The full array of Monstahs!')
              
  //         });
  //           setMonsterData(monsterUrls) // .then((res) => { console.log(res, '<-res embedded')})
  //           console.log(monsterUrls,'<- monsterUrls Post Set State')
  //       }
  //     } catch (err) {
  //       console.log(err, '<- Registered Error');
  //     }
  //   }
    
  //   fetchMonsters();
    
  //   // const monstra = async () => {
  //   //   await fetchMonsters()
  //   //     // .then((result) => {
  //   //     //   console.log(result, '<- This is the monstra function')
  //   //     //   setMonsters([result])
  //   //     // })
  //   //     console.log(monstra, '<- Does this make sense?')
  //   // }
  //   // monstra();
  // }, [])


  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  function getMonstahUrl(url) {
    setMonstahUrl(url);
  }

  if (user) {
    return (
      <>
      <NavBar user={user} setUser={setUser} getMonstahUrl={getMonstahUrl} />
      <Routes>
        <Route path="/" element={<UserProfile loggedUser={user} handleSignUpOrLogin={handleSignUpOrLogin} handleLogout={handleLogout} />} />
        <Route path="/Monsters" element={<ApiMonsters user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/Data" element={<ApiMonsterData user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/:monsterName" element={<ApiMonsterDetails user={user} handleLogout={handleLogout} getMonstahUrl={getMonstahUrl} />} />
        <Route path="/:id/monster" element={<UserMonsters loggedUser={user} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
      </>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
