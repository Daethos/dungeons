import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';
import UserProfile from '../UserProfile/UserProfile';
import './App.css';
import userService from "../../utils/userService";
import * as monstersAPI from '../../utils/monsterApi';
import ApiMonsters from "../../components/ApiMonsters/ApiMonsters";
import UserMonsters from "../../components/UserMonsters/UserMonsters";
import EditMonster from "../../components/EditMonster/EditMonster";
// import UserCharacters from '../../components/UserCharacters/UserCharacters'
import ApiMonsterDetails from "../../components/ApiMonsterDetails/ApiMonsterDetails";
import ApiMonsterData from "../../components/ApiMonsterData/ApiMonsterData";
import ApiSpells from "../../components/ApiSpells/ApiSpells";
import AuthPage from "../AuthPage/AuthPage";
import ApiCharacters from "../../components/ApiCharacters/ApiCharacters";
import Container from 'react-bootstrap/Container';
import Loading from "../../components/Loading/Loading";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [monstahUrl, setMonstahUrl] = useState('');
  const [backgroundState, setBackgroundState] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [monstra, setMonstra] = useState([])
  


  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  function getmonstahurl(url) {
    setMonstahUrl(url);
  }

  async function handleMonster(monstroso) {
    try {
        console.log(monstroso, '<- Monstroso in handleMonster start')
        const response = await monstersAPI.create(monstroso);
        console.log(response, '<- Response in handleMonster');
        setMonstra([response.data, ...monstra]);
        // setMonstra([...monstra, response.data]);
    } catch (err) {
        console.log(err.message, '<- This is the error in handleMonster')
    }
}

async function editMonstra(monstra) {
  try {
    console.log(monstra, '<- Monstra in editMonstra start')
    const response = await monstersAPI.edit(monstra);
    
    console.log(response, '<- Response in editMonstra')
    
    setMonstra([response.data, ...monstra]);
  } catch (err)  {
    console.log(err.message, '<- You are having an error in the editMonstra function in App.jsx')
  }
}

  const userBackground = document.getElementById('user-background');

  async function colores(background) {
    try {
      setBackgroundState(background);
    } catch (err) {
      console.log(err.message, '<- Error in colores')
    }
  }

  async function handleColor(e) {
    setLoading(true);
    e.preventDefault();
    console.log(e.target.name, '<- New Png?')
    const background = process.env.MONSTER_IMAGE_URL + e.target.name + '.png'
    try {
      await colores(background);
      setLoading(false);
    } catch (err) {
      console.log(err.message, ' <- Error handling Color!')
      setLoading(false);
    }
  }

  const myStyle = {
      height: 100 + 'vh',
      width: 100 + 'vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
};

  if (loading) {
    return (
        <Loading user={user} handleLogout={handleLogout} />
    );
}
  

  if (user) {
    return (
      <div 
      style={
        backgroundState 
        ? { backgroundImage: backgroundState, myStyle }
        : { backgroundImage: process.env.MONSTER_IMAGE_URL + 'Y4.png', myStyle }
    } 
      id="user-background"
      > 
      <NavBar user={user} setUser={setUser} handleLogout={handleLogout} getmonstahurl={getmonstahurl} handleColor={handleColor} />
      <Routes>
        <Route path="/" element={<UserProfile loggedUser={user} monstra={monstra} setMonstra={setMonstra} setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} handleLogout={handleLogout} />} />
        <Route path="/Monsters" element={<ApiMonsters user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/Data" element={<ApiMonsterData user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/:monsterName" element={<ApiMonsterDetails user={user} handleLogout={handleLogout} getmonstahurl={getmonstahurl} handleMonster={handleMonster} />} />
        <Route path="/:id/monster" element={<UserMonsters loggedUser={user} />} />
        <Route path="/Spells" element={<ApiSpells user={user}/>} />
        <Route path="/Characters" element={<ApiCharacters user={user} />} />
        <Route path="/edit/:monsterId" element={<EditMonster user={user} editMonstra={editMonstra} />} />
        <Route path="/Authorization" element={<AuthPage setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />} />
      </Routes>
      </div>
      
    );
  }

  return (
    <Routes>

      <Route path="/Authorization" element={<AuthPage setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/*" element={<Navigate to="/Authorization" />} />
    </Routes>
  );
}

export default App;
