import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/NavBar/NavBar';
import UserProfile from '../UserProfile/UserProfile';
// import SignupPage from "../../components/SignupPage/SignupPage";
// import LoginPage from "../../components/LoginForm/LoginForm";
import userService from "../../utils/userService";
import ApiMonsters from "../../components/ApiMonsters/ApiMonsters";
import UserMonsters from "../../components/UserMonsters/UserMonsters";
import ApiMonsterDetails from "../../components/ApiMonsterDetails/ApiMonsterDetails";
import ApiMonsterData from "../../components/ApiMonsterData/ApiMonsterData";
import ApiSpells from "../../components/ApiSpells/ApiSpells";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [monstahUrl, setMonstahUrl] = useState('');


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
      <NavBar user={user} setUser={setUser} handleLogout={handleLogout} getMonstahUrl={getMonstahUrl} />
      <Routes>
        <Route path="/" element={<UserProfile loggedUser={user} handleSignUpOrLogin={handleSignUpOrLogin} handleLogout={handleLogout} />} />
        <Route path="/Monsters" element={<ApiMonsters user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/Data" element={<ApiMonsterData user={user} handleLogout={handleLogout} />} />
        <Route path="/Monsters/:monsterName" element={<ApiMonsterDetails user={user} handleLogout={handleLogout} getMonstahUrl={getMonstahUrl} />} />
        <Route path="/:id/monster" element={<UserMonsters loggedUser={user} />} />
        <Route path="/Spells" element={<ApiSpells user={user} handleLogout={handleLogout} />} />
        {/* <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        /> */}
        <Route path="/Authorization" element={<AuthPage setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />} />
      </Routes>
      </>
    );
  }

  return (
    <Routes>
      {/* <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      /> */}
      <Route path="/Authorization" element={<AuthPage setUser={setUser} handleSignUpOrLogin={handleSignUpOrLogin} />} />
      <Route path="/*" element={<Navigate to="/Authorization" />} />
    </Routes>
  );
}

export default App;
