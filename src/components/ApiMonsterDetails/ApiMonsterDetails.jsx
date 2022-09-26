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



export default function ApiMonsterDetails({ monster, key, getMonstahUrl, loggedUser, handleMonster }) {
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
        {/* <SolaMonstra monsters={monstroso} /> */}
        {/* <MonsterCard monsters={monstroso} /> */}
        <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={1 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={2 | 'auto'}>
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
                {
                monstroso.actions
                ? <> {
                    monstroso.actions[0]
                    ? 'Actions (1): ' + monstroso.actions[0].name + ' - ' + monstroso.actions[0].desc
                    : ''
                }</>
                : <>Actions (1): Error</>
                }
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
            <React.Fragment>
            <div class="stat-block wide">
            <hr class="orange-border" />
            <div class="section-left">
                <div class="creature-heading">
                    <h1>{monstroso.name}</h1>
                    <h2>{monstroso.size} {monstroso.type}, {monstroso.alignment}</h2>
                </div> 
                <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                <div class="top-stats">
                    <div class="property-line first">
                        <h4>Armor Class</h4>
                        <p> {monstroso.armor_class}</p>
                    </div> 
                    <div class="property-line">
                        <h4>Hit Points</h4>
                        <p> {monstroso.hit_points} ({monstroso.hit_dice})</p>
                    </div> 
                    <div class="property-line last">
                        <h4>Speed</h4>
                        {/* <p>{monstroso.speed}</p> */}
                        {
                        monstroso.speed?.burrow
                        ? <p> Burrow: {monstroso.speed.burrow}</p>
                        : ''
                        }
                        {
                        monstroso.speed?.climb
                        ? <p> Climb: {monstroso.speed.climb}</p>
                        : ''
                        }
                        {
                        monstroso.speed?.fly
                        ? <p> Flight: {monstroso.speed.fly}</p>
                        : ''
                        }
                        {
                        monstroso.speed?.swim
                        ? <p> Swim: {monstroso.speed.swim}</p>
                        : ''
                        }
                        {
                        monstroso.speed?.walk
                        ? <p> Walk: {monstroso.speed.walk}</p>
                        : ''
                        }
                    </div> 
                    <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                    <div class="abilities">
                        <div class="ability-strength">
                            <h4>STR</h4>
                            <p>{monstroso.strength}</p>
                        </div> 
                        <div class="ability-dexterity">
                            <h4>DEX</h4>
                            <p>{monstroso.dexterity}</p>
                        </div> 
                        <div class="ability-constitution">
                            <h4>CON</h4>
                            <p>{monstroso.constitution}</p>
                        </div> 
                        <div class="ability-intelligence">
                            <h4>INT</h4>
                            <p>{monstroso.intelligence}</p>
                        </div> 
                        <div class="ability-wisdom">
                            <h4>WIS</h4>
                            <p>{monstroso.wisdom}</p>
                        </div> 
                        <div class="ability-charisma">
                            <h4>CHA</h4>
                            <p>{monstroso.charisma}</p>
                        </div> 
                    </div>
                    <svg height="5" width="100%" class="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    {/* <div class="property-line first last">
                        <h4>Proficiencies</h4>
                        {
                        monstroso.proficiencies[0].proficiency?.name
                        ? <p> {monstroso.proficiencies[0].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[0]?.value
                        ? <p> {monstroso.proficiencies[0].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[1]?.proficiency.name
                        ? <p> {monstroso.proficiencies[1].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[1]?.value
                        ? <p> {monstroso.proficiencies[1].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[2]?.proficiency.name
                        ? <p> {monstroso.proficiencies[2].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[2]?.value
                        ? <p> {monstroso.proficiencies[2].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[3]?.proficiency.name
                        ? <p> {monstroso.proficiencies[3].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[3]?.value
                        ? <p> {monstroso.proficiencies[3].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[4]?.proficiency.name
                        ? <p> {monstroso.proficiencies[4].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[4]?.value
                        ? <p> {monstroso.proficiencies[4].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[5]?.proficiency.name
                        ? <p> {monstroso.proficiencies[5].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[5]?.value
                        ? <p> {monstroso.proficiencies[5].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[6]?.proficiency.name
                        ? <p> {monstroso.proficiencies[6].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[6]?.value
                        ? <p> {monstroso.proficiencies[6].value}, </p>
                        : ''
                        }
                        
                        {
                        monstroso.proficiencies[7]?.proficiency.name
                        ? <p> {monstroso.proficiencies[7].proficiency.name} </p>
                        : ''
                        }
                        {
                        monstroso.proficiencies[7]?.value
                        ? <p> {monstroso.proficiencies[7].value} </p>
                        : ''
                        }
                    </div>  */}
                    <svg height="5" width="100%" class="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    {/* <div class="property-line first">
                        <h4>Condition Immunities</h4>
                        
                        {
                        monstroso.condition_immunities[0]?.name 
                        ?  <p> {monstroso.condition_immunities[0].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[1]?.name 
                        ?  <p> {monstroso.condition_immunities[1].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[2]?.name 
                        ?  <p> {monstroso.condition_immunities[2].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[3]?.name 
                        ?  <p> {monstroso.condition_immunities[3].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[4]?.name 
                        ?  <p> {monstroso.condition_immunities[4].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[5]?.name 
                        ?  <p> {monstroso.condition_immunities[5].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[6]?.name 
                        ?  <p> {monstroso.condition_immunities[6].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[7]?.name 
                        ?  <p> {monstroso.condition_immunities[7].name} </p>
                        : ''
                        }
                        {
                        monstroso.condition_immunities[8]?.name 
                        ?  <p> {monstroso.condition_immunities[8].name} </p>
                        : ''
                        }
                    </div>
                    <div class="property-line">
                        <h4>Damage Immunities</h4>
                        
                        {
                        monstroso.damage_immunities[0]
                        ? <p> {monstroso.damage_immunities[0].charAt(0).toUpperCase() + monstroso.damage_immunities[0].slice(1)} </p>
                        : ''
                        }
                    </div> 
                    <div class="property-line">
                        <h4>Damage Resistances</h4>
                        
                        {
                        monstroso.damage_resistances?.[0] 
                        ?  <p> {monstroso.damage_resistances[0].charAt(0).toUpperCase() + monstroso.damage_resistances[0].slice(1)} </p>
                        : ''
                        }
                        {
                        monstroso.damage_resistances?.[1] 
                        ?  <p> {monstroso.damage_resistances[1].charAt(0).toUpperCase() + monstroso.damage_resistances[1].slice(1)} </p>
                        : ''
                        }
                        {
                        monstroso.damage_resistances?.[2] 
                        ?  <p> {monstroso.damage_resistances[2].charAt(0).toUpperCase() + monstroso.damage_resistances[2].slice(1)} </p>
                        : ''
                        }
                    </div>
                    <div class="property-line">
                        <h4>Damage Vulnerabilities</h4>
                        
                        {
                        monstroso.damage_vulnerabilities?.[0] 
                        ?  <p> {monstroso.damage_vulnerabilities[0]} </p>
                        : ''
                        }
                        {
                        monstroso.damage_vulnerabilities?.[1] 
                        ?  <p> {monstroso.damage_vulnerabilities[1]} </p>
                        : ''
                        }
                    </div> 
                    <div class="property-line">
                        <h4>Senses</h4>
                        
                        {
                        monstroso.senses?.blindsight
                        ? <p> Blindsight: {monstroso.senses.blindsight}</p>
                        : ''
                        }
                        {
                        monstroso.senses?.darkvision
                        ? <p> Darkvision: {monstroso.senses.darkvision}</p>
                        : ''
                        }
                        {
                        monstroso.senses?.passive_perception
                        ? <p> Passive Perception: {monstroso.senses.passive_perception}</p>
                        : ''
                        }
                        {
                        monstroso.senses?.truesight
                        ? <p> Truesight: {monstroso.senses.truesight}</p>
                        : ''
                        }
                        {
                        monstroso.senses?.tremorsense
                        ? <p> Tremorsense: {monstroso.senses.tremorsense}</p>
                        : ''
                        }
                    </div>  */}
                    <div class="property-line">
                        <h4>Languages</h4>
                        <p> {monstroso.languages}</p>
                    </div> 
                    <div class="property-line last">
                        <h4>Challenge</h4>
                        <p> {monstroso.challenge_rating}</p>
                    </div> 
                </div> 
                <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                {/* <div class="property-block">
                    {
                    monstroso.special_abilities[0].name
                    ? <h4> {monstroso.special_abilities[0].name} </h4>
                    : ''
                    }
                    {
                    monstroso.special_abilities[0].desc
                    ? <p> {monstroso.special_abilities[0].desc} <br /> </p>
                    : ''
                    }
                    
                    {
                    monstroso.special_abilities[1]?.name
                    ? <h4> {monstroso.special_abilities[1].name} </h4>
                    : ''
                    }
                    {
                    monstroso.special_abilities[1]?.desc
                    ? <p> {monstroso.special_abilities[1].desc} <br /> </p>
                    : ''
                    }
                    
                    {
                    monstroso.special_abilities[2]?.name
                    ? <h4> {monstroso.special_abilities[2].name} </h4>
                    : ''
                    }
                    {
                    monstroso.special_abilities[2]?.desc
                    ? <p> {monstroso.special_abilities[2].desc} <br /> </p> 
                    : ''
                    }
                    
                    {
                    monstroso.special_abilities[3]?.name
                    ? <h4> {monstroso.special_abilities[3].name} </h4>
                    : ''
                    }
                    {
                    monstroso.special_abilities[3]?.desc
                    ? <p> {monstroso.special_abilities[3].desc} <br /> </p>
                    : ''
                    }
                </div>  */}
                <img src={process.env.PUBLIC_URL + '/images/' + monstroso.index + '.jpg'} alt={monstroso.name} id="monstroso-card-image" />
            </div> 
            <div class="section-right">
                <div class="actions">
                    <h3>Actions</h3>
                    
                    {/* <div class="property-block">
                        {
                        monstroso.actions[0].name
                        ? <h4> {monstroso.actions[0].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[0].desc
                        ? <p> {monstroso.actions[0].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monstroso.actions[1]?.name
                        ? <h4> {monstroso.actions[1].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[1]?.desc
                        ? <p> {monstroso.actions[1].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monstroso.actions[2]?.name
                        ? <h4> {monstroso.actions[2].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[2]?.desc
                        ? <p> {monstroso.actions[2].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monstroso.actions[3]?.name
                        ? <h4> {monstroso.actions[3].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[3]?.desc
                        ? <p> {monstroso.actions[3].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monstroso.actions[4]?.name
                        ? <h4> {monstroso.actions[4].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[4]?.desc
                        ? <p> {monstroso.actions[4].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monstroso.actions[5]?.name
                        ? <h4> {monstroso.actions[5].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[5]?.desc
                        ? <p> {monstroso.actions[5].desc} <br /> </p>
                        : ''
                        }
                        {
                        monstroso.actions[6]?.name
                        ? <h4> {monstroso.actions[6].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[6]?.desc
                        ? <p> {monstroso.actions[6].desc} <br /> </p>
                        : ''
                        }
                        {
                        monstroso.actions[7]?.name
                        ? <h4> {monstroso.actions[7].name} </h4>
                        : ''
                        }
                        {
                        monstroso.actions[7]?.desc
                        ? <p> {monstroso.actions[7].desc} <br /> </p>
                        : ''
                        }
                    </div>  */}
                    
                </div> 
                <div class="actions">
                    <h3>Legendary Actions</h3>
                    
                    {/* <div class="property-block">
                        {
                        monstroso.legendary_actions[0]?.name
                        ? <h4>{monstroso.legendary_actions[0].name} </h4>
                        : <h4 className="m-4">"Don't worry fren, you can always make the {monstroso.name} legendary. Even the Awakened Shrub can be unleashed... ! !"</h4>
                        }
                        {
                        monstroso.legendary_actions[0]?.desc
                        ? <p> {monstroso.legendary_actions[0].desc} <br /> </p>
                        : <p> - A Silly Goose</p>
                        }
                        
                        {
                        monstroso.legendary_actions[1]?.name
                        ? <h4>{monstroso.legendary_actions[1].name} </h4>
                        : ''
                        }
                        {
                        monstroso.legendary_actions[1]?.desc
                        ? <p> {monstroso.legendary_actions[1].desc} <br /> </p>
                        : ''
                        }
                        {
                        monstroso.legendary_actions[2]?.name
                        ? <h4>{monstroso.legendary_actions[2].name} </h4>
                        : ''
                        }
                        {
                        monstroso.legendary_actions[2]?.desc
                        ? <p> {monstroso.legendary_actions[2].desc} <br /> </p>
                        : ''
                        }
                        <br />
                        {
                        monstroso.legendary_actions[3]?.name
                        ? <h4>{monstroso.legendary_actions[3].name} </h4>
                        : ''
                        }
                        {
                        monstroso.legendary_actions[3]?.desc
                        ? <p> {monstroso.legendary_actions[3].desc} </p>
                        : ''
                        }
                    </div>  */}
                    
                </div> 
            </div> 
            <hr class="orange-border bottom" />
        </div>
        </React.Fragment>
    </div>
    );
}


