import React, { useState, useEffect } from "react";
import './ApiMonsterDetails.css';
import { useParams, Navigate } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import AddMonster from '../AddMonster/AddMonster';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';



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
                
                // const res = await fetch(url);
                //     console.log(res);
                //     if (res.ok) {
                        // const newData = await res.json();
                        // console.log(newData, '<- Can you be my favorite Monster?');
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
            } catch (err) {
                console.log(err);
            }
        }
        fetchUrls();
    }

    // <Col className="my-3" id="user-monsters">
    //         <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} bg="black" id="user-monster-card">
    //             <Card.Img src={process.env.PUBLIC_URL + '/images/' + mon.index + '.jpg'} key={mon.index} alt={mon.name} id="monster-image" />
    //             <Card.Body style={{ backgroundImage: 'url(/images/dungeon-background.png)' }}>
    //                 <Card.Title>{mon.name}</Card.Title>
    //                 <Card.Text>
    //                 <Card.Subtitle>{mon.size} {mon.type}</Card.Subtitle>

    // </Card.Text>
    //                 </Card.Body>
    //             </Card>
    //             </Col>
    
    return (
    <div>
        <Col md={{span: 6, offset: 3}}>
        {/* <AddMonster monstroso={monstroso} handleMonster={handleMonster} /> */}
        {
            monstra
            ? <button value={monstroso} type="submit" className="btn btn-danger" disabled>
            {monstroso.name} Is Yours Now!
            </button>
            : <Form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </Form>
        }
        <Form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success">
            Add {monstroso.name} ?
            </button>
        </Form>
        </Col>
        <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={1 | 'auto'} lg={1 | 'auto'} xl={1 | 'auto'} xxl={2 | 'auto'}>
        <Col id="user-monsters">
            <Card className="" id="user-monster-card" bg="danger" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}}>
            <Card.Img src={process.env.PUBLIC_URL + monsterImage} key={monstroso.index} alt={monstroso.name} style={{maxWidth: 100 + 'vw', height: 100 + 'vh'}} id="monster-image" />
            <Card.Body style={{ backgroundImage: 'url(/images/dungeon-background.png)' }}>
            <Card.Title>{monstroso.name}</Card.Title>
            <Card.Text>
            <Card.Subtitle>{monstroso.size} {monstroso.type}</Card.Subtitle>
                <br />
                Hit Points: {monstroso.hit_points}
                <br />
                Hit Dice: {monstroso.hit_dice}
                <br />
                Hit Points Roll: {monstroso.hit_points_roll}
                <br />
                Armor Class: {monstroso.armor_class}
                <br />
                Challenge Rating: {monstroso.challenge_rating}
                <br />
                Languages: {monstroso.languages}
                <br />
                {
                monstroso.speed
                ? <>Speed (Burrow): {
                    monstroso.speed.burrow
                    ? monstroso.speed.burrow
                    : 'No Info'
                }</>
                : ''
                }
                <br />
                {
                monstroso.speed
                ? <>Speed (Climb): {
                    monstroso.speed.climb
                    ? monstroso.speed.climb
                    : 'No Info'
                }</>
                : ''
                }
                <br />
                {
                monstroso.speed
                ? <>Speed (Flight): {
                    monstroso.speed.fly
                    ? monstroso.speed.fly
                    : 'No Info'
                }</>
                : ''
                }
                <br />
                {
                monstroso.speed 
                ? <>Speed (Swim): {
                    monstroso.speed.swim
                    ? monstroso.speed.swim
                    : 'No Info'
                    }</>
                : ''
                }
                <br />
                {
                monstroso.speed 
                ? <>Speed (Walk): {
                    monstroso.speed.walk
                    ? monstroso.speed.walk
                    : 'No Info'
                    }</>
                : ''
                }
                <br />
                Strength: {monstroso.strength}
                <br />
                Dexterity: {monstroso.dexterity}
                <br />
                Constitution: {monstroso.constitution}
                <br />
                Intelligence: {monstroso.intelligence}
                <br />
                Wisdom: {monstroso.wisdom}
                <br />
                Charisma: {monstroso.charisma}
                {/* {
                monstroso.actions
                ? <> {
                    monstroso.actions[0]
                    ? 'Actions (1): ' + monstroso.actions[0].name + ' - ' + monstroso.actions[0].desc
                    : ''
                }</>
                : <>Actions (1): Error</>
                }
                {
                monstroso.actions
                ? <> {
                    monstroso.actions[1]
                    ? 'Actions (2): ' + monstroso.actions[1].name + ' - ' + monstroso.actions[1].desc
                    : ''
                }</>
                : <>Actions (2): Error</>
                }
                {
                monstroso.actions
                ? <> {
                    monstroso.actions[2]
                    ? 'Actions (3): ' + monstroso.actions[2].name + ' - ' + monstroso.actions[2].desc
                    : ''
                }</>
                : <>Actions (3): Error</>
                }
                {
                monstroso.actions
                ? <> {
                    monstroso.actions[3]
                    ? 'Actions (4): ' + monstroso.actions[3].name + ' - ' + monstroso.actions[3].desc
                    : ''
                }</>
                : <>Actions (4): Error</>
                }
                {
                monstroso.legendary_actions
                ? <> {
                    monstroso.legendary_actions[0]
                    ? 'Legendary Action (1): ' + monstroso.legendary_actions[0].one.name + ' - ' + monstroso.legendary_actions[0].one.desc
                    : ''
                }</>
                : <>legendary_actions (1): Error</>
                }
                {
                monstroso.legendary_actions
                ? <> {
                    monstroso.legendary_actions[0]
                    ? 'Legendary Action (2): ' + monstroso.legendary_actions[0].two.name + ' - ' + monstroso.legendary_actions[0].two.desc
                    : ''
                }</>
                : <>legendary_actions (2): Error</>
                }
                {
                monstroso.legendary_actions
                ? <> {
                    monstroso.legendary_actions[0]
                    ? 'Legendary Action (3): ' + monstroso.legendary_actions[0].three.name + ' - ' + monstroso.legendary_actions[0].three.desc
                    : ''
                }</>
                : <>legendary_actions (3): Error</>
                } */}
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            </Row>
    </div>
    );
}


