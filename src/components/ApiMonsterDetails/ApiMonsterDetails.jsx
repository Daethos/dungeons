import React, { useState, useEffect } from "react";
import './ApiMonsterDetails.css';
import { useParams, Navigate } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import AddMonster from '../AddMonster/AddMonster';



export default function ApiMonsterDetails({ monster, key, getMonstahUrl, loggedUser }) {
    const [monstroso, setMonstroso] = useState({});
    const [monsterImage, setMonsterImage] = useState('');
    const [monstra, setMonstra] = useState([])
    const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'

    const { monsterName } = useParams();
    getMonstahUrl(monsterName);

    useEffect(() => {
        const url = `${monsterUrl}${monsterName}`;

        async function fetchUrls() {
            console.log(monsterName, '<- Monster Data in Monster Detail')
            try {
                
                const res = await fetch(url);
                    console.log(res);
                    if (res.ok) {
                        const newData = await res.json();
                        console.log(newData, '<- What on earth are you?');
                        console.log(newData.index, '<-Can I use you?')
                        let monSrc = ''; 
                        monSrc = '/images/' + newData.index + '.jpg';
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

    async function handleMonster(monstroso) {
        try {
            console.log(monstroso, '<- Monstroso in handleMonster start')
            const response = await monstersAPI.create(monstroso);
            console.log(response, '<- Response in handleMonster');
            setMonstra([response.data, ...monstra]);
        } catch (err) {
            console.log(err.message, '<- This is the error in handleMonster')
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const url = `${monsterUrl}${monsterName}`;

        async function fetchUrls() {
            console.log(monsterName, '<- Monster Data in Monster Detail')
            try {
                
                const res = await fetch(url);
                    console.log(res);
                    if (res.ok) {
                        const newData = await res.json();
                        console.log(newData, '<- Can you be my favorite Monster?');
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
                    }
            } catch (err) {
                console.log(err);
            }
        }
        fetchUrls();
    }
    
    return (
    <div className="border border-black">
        {/* <AddMonster monstroso={monstroso} handleMonster={handleMonster} /> */}
        {
            monstra
            ? <button value={monstroso} type="submit" className="btn btn-danger" disabled>
            {monstroso.name} Is Yours Now!
            </button>
            : <form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </form>
        }
        <form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </form>
        <h1>Monster: {monstroso.name}</h1>
        <h2>Type: {monstroso.type}</h2>
        <h2>Alignment: {monstroso.alignment}</h2>
        <img src={process.env.PUBLIC_URL + monsterImage} alt={monstroso.name} id="monster-image" />
        <h2>Size: {monstroso.size}</h2>
        {
            monstroso.speed
            ? <h2>Speed (Burrow): {
                monstroso.speed.burrow
                ? monstroso.speed.burrow
                : 'No Relevant Information'
            }</h2>
            : <h2>Speed (Climb): Error</h2>
        }
        {
            monstroso.speed
            ? <h2>Speed (Climb): {
                monstroso.speed.climb
                ? monstroso.speed.climb
                : 'No Relevant Information'
            }</h2>
            : <h2>Speed (Climb): Error</h2>
        }
        {
            monstroso.speed
            ? <h2>Speed (Flight): {
                monstroso.speed.fly
                ? monstroso.speed.fly
                : 'No Relevant Information'
            }</h2>
            : <h2>Speed (Flight): Error</h2>
        }
        {
            monstroso.speed 
            ? <h2>Speed (Swim): {
                monstroso.speed.swim
                ? monstroso.speed.swim
                : 'No Relevant Information'
                }</h2>
            : <h2>Speed (Swim): Error</h2>
        }
        {
            monstroso.speed 
            ? <h2>Speed (Walk): {
                monstroso.speed.walk
                ? monstroso.speed.walk
                : 'No Relevant Information'
                }</h2>
            : <h2>Speed (Walk): Error</h2>
        }
        <h2>Hit Points: {monstroso.hit_points}</h2>
        <h2>Hit Dice: {monstroso.hit_dice}</h2>
        <h2>Armor Class: {monstroso.armor_class}</h2>
        <h2>Challenge Rating: {monstroso.challenge_rating}</h2>
        <h2>Languages: {monstroso.languages}</h2>

        <h2>Attributes</h2>
        <h2>Strength: {monstroso.strength}</h2>
        <h2>Dexterity: {monstroso.dexterity}</h2>
        <h2>Constitution: {monstroso.constitution}</h2>
        <h2>Intelligence: {monstroso.intelligence}</h2>
        <h2>Wisdom: {monstroso.wisdom}</h2>
        <h2>Charisma: {monstroso.charisma}</h2>

        {
            monstroso.actions
            ? <h2> {
                monstroso.actions[0]
                ? 'Actions (1): ' + monstroso.actions[0].name + ' - ' + monstroso.actions[0].desc
                : ''
            }</h2>
            : <h2>Actions (1): Error</h2>
        }
        {
            monstroso.actions
            ? <h2> {
                monstroso.actions[1]
                ? 'Actions (2): ' + monstroso.actions[1].name + ' - ' + monstroso.actions[1].desc
                : ''
            }</h2>
            : <h2>Actions (2): Error</h2>
        }
        {
            monstroso.actions
            ? <h2> {
                monstroso.actions[2]
                ? 'Actions (3): ' + monstroso.actions[2].name + ' - ' + monstroso.actions[2].desc
                : ''
            }</h2>
            : <h2>Actions (3): Error</h2>
        }
        {
            monstroso.actions
            ? <h2> {
                monstroso.actions[3]
                ? 'Actions (4): ' + monstroso.actions[3].name + ' - ' + monstroso.actions[3].desc
                : ''
            }</h2>
            : <h2>Actions (4): Error</h2>
        }
                
    </div>
    );
}


