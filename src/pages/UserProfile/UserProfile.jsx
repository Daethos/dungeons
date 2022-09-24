import './UserProfile.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import * as monstersAPI from '../../utils/monsterApi';
import UserMonsters from '../../components/UserMonsters/UserMonsters';
import NavBar from '../../components/NavBar/NavBar';


export default function UserProfile({ loggedUser, handleLogout }) {
    const [monsters, setMonsters] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getMonsters() {
            try {
                const response = await monstersAPI.getAll();
                console.log(response, ' <- the response in getMonsters')
                setMonsters([...response.data])
            } catch (err) {
                console.log(err.message);
            }
        }
        getMonsters()
    }, [])
    

    return (
        <div style={{ backgroundImage: 'url(/images/dungeon-background.png)' }}>
            {/* <img src={process.env.PUBLIC_URL + '/images/dungeon-background.png'} className="overlay" alt="ancient-black-dragon" id="background" /> */}
            {/* <div className="overlay" style={{background: process.env.PUBLIC_URL + '/images/dungeon-background.png'}} /> */}
            <h5>{loggedUser.email}</h5>
            <h2>Hello, {loggedUser.username}</h2>
            <h3>Bio: {loggedUser.bio}</h3>
            <UserMonsters monsters={monsters} loggedUser={loggedUser} />
            
        </div>
    );
}

// I want to follow the logic of Jim's work with the PostCards and make a component for MonsterCards, probably on
// Fresh go-round of concept in p4
