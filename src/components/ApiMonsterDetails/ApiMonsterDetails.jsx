import React, { useState, useEffect } from "react";
import './ApiMonsterDetails.css';
import { useParams, Navigate } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import SolaMonstra from "../SolaMonstra/SolaMonstra";
import MonsterCard from "../MonsterCard/MonsterCard";
import AddMonster from '../AddMonster/AddMonster';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// Different 'translation' than how the monster model is structured. Patience!

export default function ApiMonsterDetails({ monster, key, getmonstahurl, loggedUser, handleMonster }) {
    const [monstroso, setMonstroso] = useState({});
    const [monsterImage, setMonsterImage] = useState('');
    const [monstra, setMonstra] = useState([])
    const [isSaved, setIsSaved] = useState(false)
    const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'

    const { monsterName } = useParams();
    // getmonstahurl(monsterName); <- This was trying to update state in App.jsx every time
    // I put this in the useEffect so it does not keep trying to update the App page
    // Instead it will only setState when it is changint the actualy monsterName parameter

    useEffect(() => {
        const url = `${monsterUrl}${monsterName}`;

        // TODO: Put API in Backend
        // FIXME: Put API in Backend

        async function fetchUrls() {
            getmonstahurl(monsterName);
            console.log(monsterName, '<- Monster Data in Monster Detail')
            try {
                const res = await fetch(url);
                    console.log(res);
                    if (res.ok) {
                        const newData = await res.json();
                        console.log(newData, '<- What on earth are you?');
                        console.log(newData.index, '<-Can I use you?')
                        let monSrc = ''; 
                        monSrc = '/images/' + newData.index + '.png';
                        console.log(monSrc, '<-Hopefully the image src')
                        setMonsterImage(monSrc);
                        setMonstroso(newData);
                        console.log(monstroso, '<- the monstroso in question?')
                    }
            } catch (err) {
                console.log(err);
            }
        }
        fetchUrls();
    }, []);

    // async function handleMonster(monstroso) {
    //     try {
    //         console.log(monstroso, '<- Monstroso in handleMonster start')
    //         const response = await monstersAPI.create(monstroso);
    //         console.log(response, '<- Response in handleMonster');
    //         setMonstra([response.data, ...monstra]);
    //         // setMonstra([...monstra, response.data]);
    //     } catch (err) {
    //         console.log(err.message, '<- This is the error in handleMonster')
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchUrls() {
            console.log(monsterName, '<- Monster Data in Monster Detail')
            try {
                const formData = new FormData();
                let required = ['special_abilities', 'proficiencies', 'damage_vulnerabilities', 'damage_resistances',  'damage_immunities', 'condition_immunities', 'actions', 'senses', 'legendary_actions', 'speed', 'index', 'name', 'size', 'type', 'alignment', 'armor_class', 'hit_points', 'hit_dice', 'hit_points_roll', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'languages', 'challenge_rating', 'xp']
                for (let key in monstroso) {
                    if (required.includes(key)) {
                        formData[key] = monstroso[key]
                    }
                }
                        console.log(
                            formData.forEach((item) => console.log(item)),
                            '<- The current spec of formData');
                            handleMonster(formData); // formData is the data we want to send to the server!
                    // }
                            setIsSaved(true);
            } catch (err) {
                console.log(err);
            }
        }
        fetchUrls();
    }
    
    return (
    <div>
        <Col md={{span: 6, offset: 5}}>
        {
            isSaved
            ? <button value={monstroso} type="submit" className="btn btn-danger my-3" disabled>
            {monstroso.name} Is Yours Now!
            </button>
            : <Form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success my-3">
            Add {monstroso.name} ?
            </button>
        </Form>
        }
        {/* <Form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </Form> */}
        </Col>
        <SolaMonstra monster={monstroso} key={monstroso.index} handleSubmit={handleSubmit} isSaved={isSaved} />
    </div>
    );
}


