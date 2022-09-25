import './UserProfile.css';
import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import * as monstersAPI from '../../utils/monsterApi';
import UserMonsters from '../../components/UserMonsters/UserMonsters';
// import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';


export default function UserProfile({ loggedUser, handleLogout, setUser }) {
    const [monsters, setMonsters] = useState([]);
    // const [error, setError] = useState('');

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
        <div>
            {/* <NavBar user={loggedUser} setUser={setUser} handleLogout={handleLogout} /> */}
            {/* <img src={process.env.PUBLIC_URL + '/images/dungeon-background.png'} className="overlay" alt="ancient-black-dragon" id="background" /> */}
            {/* <div className="overlay" style={{background: process.env.PUBLIC_URL + '/images/dungeon-background.png'}} /> */}
            <UserMonsters monsters={monsters} key={loggedUser.username} loggedUser={loggedUser} />
            
        </div>
    );
}

// I want to follow the logic of Jim's work with the PostCards and make a component for MonsterCards, probably on
// Fresh go-round of concept in p4
