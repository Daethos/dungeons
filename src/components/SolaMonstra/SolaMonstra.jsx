import './SolaMonstra.css';
import React, { useEffect, useState, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Loading from '../Loading/Loading';
import EditMonster from '../EditMonster/EditMonster';

export default function SolaMonstra({ monster, deleteMonster, editMonster, isSaved, onProfile, user, inCommunity, apiMonster, handleSubmit }) {
    const BUCKET_START = 'https://collectionbucketman.s3.amazonaws.com/dungeons/';
    // const [userCharactersState, setUserCharactersState] = useState(null);
    // style={{maxWidth: 50 + 'vw'}}
    //  style={{maxWidth: 25 + 'vw'}}
    // style={{maxWidth: 100 + 'vw', height: 100 + 'vh'}}
    const [loading, setLoading] = useState(false);
    const [editMonsterState, setEditMonsterState] = useState(false)
    const [monsterState, setMonsterState] = useState({monster})
    console.log(monsterState)
    const [data, setData] = useState({ id: "1t4",
        title: " How to pass state in react-router-dom",
        tag: ["reactjs", "react-router-dom"]
    });

    function editMonster(monster) {
        setEditMonsterState(true);
    }
    
    if (loading) {
        return (
        <>
            <Loading />
        </>
        );
    }

        return (
            
            // <h1>Hello!</h1>
            <React.Fragment>
                {
                monster
                ?
                <Row 
                    className="justify-content-sm-center" 
                    // style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} 
                    xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}
                >
            <Col className="stat-block wide">
            <hr className="orange-border" />
            
            <div className="section-left">
                <div className="creature-heading">
                {
                inCommunity
                ? 
                <div className="actions">
                <Link to={`/${monster.user.username}`} style={{ 'textDecoration': 'none' }}>
                    <h3>
                        <img src={monster.user.photoUrl ? monster.user.photoUrl : ''} id="community-pic"  /> 
                           {monster.user.username}
                    </h3>
                    
                    {/* <svg height="5" width="100%" className="tapered-rule my-2">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg> */}
                </Link>
                    </div> 
                : ''
            }
                    <h1>{monster.name}</h1>
                    <h2>{monster.size} {monster.type}, {monster.alignment}</h2>
                </div> 
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                <div className="top-stats">
                    <div className="property-line first">
                        <h4>Armor Class</h4>
                        <p> {monster.armor_class}</p>
                    </div> 
                    <div className="property-line">
                        <h4>Hit Points</h4>
                        <p> {monster.hit_points} ({monster.hit_dice})</p>
                    </div> 
                    <div className="property-line last">
                        <h4>Speed</h4>
                        {
                        monster.speed?.burrow
                        ? <p> Burrow: {monster.speed.burrow}</p>
                        : ''
                        }
                        {
                        monster.speed?.climb
                        ? <p> Climb: {monster.speed.climb}</p>
                        : ''
                        }
                        {
                        monster.speed?.fly
                        ? <p> Flight: {monster.speed.fly}</p>
                        : ''
                        }
                        {
                        monster.speed?.swim
                        ? <p> Swim: {monster.speed.swim}</p>
                        : ''
                        }
                        {
                        monster.speed?.walk
                        ? <p> Walk: {monster.speed.walk}</p>
                        : ''
                        }
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="abilities">
                        <div className="ability-strength">
                            <h4>STR</h4>
                            <p>{monster.strength}</p>
                        </div> 
                        <div className="ability-dexterity">
                            <h4>DEX</h4>
                            <p>{monster.dexterity}</p>
                        </div> 
                        <div className="ability-constitution">
                            <h4>CON</h4>
                            <p>{monster.constitution}</p>
                        </div> 
                        <div className="ability-intelligence">
                            <h4>INT</h4>
                            <p>{monster.intelligence}</p>
                        </div> 
                        <div className="ability-wisdom">
                            <h4>WIS</h4>
                            <p>{monster.wisdom}</p>
                        </div> 
                        <div className="ability-charisma">
                            <h4>CHA</h4>
                            <p>{monster.charisma}</p>
                        </div> 
                    </div>
                    <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="property-line first last">
                        <h4>Proficiencies</h4>
                        {
                        monster.proficiencies?.[0]?.proficiency.name
                        ? <p> {monster.proficiencies[0].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[0]?.value
                        ? <p> {monster.proficiencies[0].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[1]?.proficiency.name
                        ? <p> {monster.proficiencies[1].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[1]?.value
                        ? <p> {monster.proficiencies[1].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[2]?.proficiency.name
                        ? <p> {monster.proficiencies[2].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[2]?.value
                        ? <p> {monster.proficiencies[2].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[3]?.proficiency.name
                        ? <p> {monster.proficiencies[3].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[3]?.value
                        ? <p> {monster.proficiencies[3].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[4]?.proficiency.name
                        ? <p> {monster.proficiencies[4].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[4]?.value
                        ? <p> {monster.proficiencies[4].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[5]?.proficiency.name
                        ? <p> {monster.proficiencies[5].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[5]?.value
                        ? <p> {monster.proficiencies[5].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[6]?.proficiency.name
                        ? <p> {monster.proficiencies[6].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[6]?.value
                        ? <p> {monster.proficiencies[6].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[7]?.proficiency.name
                        ? <p> {monster.proficiencies[7].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[7]?.value
                        ? <p> {monster.proficiencies[7].value} </p>
                        : ''
                        }
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="property-line first">
                        <h4>Condition Immunities</h4>
                        {
                        monster.condition_immunities?.[0]?.name 
                        ?  <p> {monster.condition_immunities[0].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[1]?.name 
                        ?  <p> {monster.condition_immunities[1].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[2]?.name 
                        ?  <p> {monster.condition_immunities[2].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[3]?.name 
                        ?  <p> {monster.condition_immunities[3].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[4]?.name 
                        ?  <p> {monster.condition_immunities[4].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[5]?.name 
                        ?  <p> {monster.condition_immunities[5].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[6]?.name 
                        ?  <p> {monster.condition_immunities[6].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[7]?.name 
                        ?  <p> {monster.condition_immunities[7].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities?.[8]?.name 
                        ?  <p> {monster.condition_immunities[8].name} </p>
                        : ''
                        }
                    </div>
                    <div className="property-line">
                        <h4>Damage Immunities</h4>
                        {
                        monster.damage_immunities?.[0]
                        ? <p> {monster.damage_immunities[0].charAt(0).toUpperCase() + monster.damage_immunities[0].slice(1)} </p>
                        : ''
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Damage Resistances</h4>
                        {
                        monster.damage_resistances?.[0] 
                        ?  <p> {monster.damage_resistances[0].charAt(0).toUpperCase() + monster.damage_resistances[0].slice(1)} </p>
                        : ''
                        }
                        {
                        monster.damage_resistances?.[1] 
                        ?  <p> {monster.damage_resistances[1].charAt(0).toUpperCase() + monster.damage_resistances[1].slice(1)} </p>
                        : ''
                        }
                        {
                        monster.damage_resistances?.[2] 
                        ?  <p> {monster.damage_resistances[2].charAt(0).toUpperCase() + monster.damage_resistances[2].slice(1)} </p>
                        : ''
                        }
                    </div>
                    <div className="property-line">
                        <h4>Damage Vulnerabilities</h4>
                        {
                        monster.damage_vulnerabilities?.[0] 
                        ?  <p> {monster.damage_vulnerabilities[0]} </p>
                        : ''
                        }
                        {
                        monster.damage_vulnerabilities?.[1] 
                        ?  <p> {monster.damage_vulnerabilities[1]} </p>
                        : ''
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Senses</h4>
                        
                        {
                        monster.senses?.blindsight
                        ? <p> Blindsight: {monster.senses.blindsight}</p>
                        : ''
                        }
                        {
                        monster.senses?.darkvision
                        ? <p> Darkvision: {monster.senses.darkvision}</p>
                        : ''
                        }
                        {
                        monster.senses?.passive_perception
                        ? <p> Passive Perception: {monster.senses.passive_perception}</p>
                        : ''
                        }
                        {
                        monster.senses?.truesight
                        ? <p> Truesight: {monster.senses.truesight}</p>
                        : ''
                        }
                        {
                        monster.senses?.tremorsense
                        ? <p> Tremorsense: {monster.senses.tremorsense}</p>
                        : ''
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Languages</h4>
                        <p> {monster.languages}</p>
                    </div> 
                    <div className="property-line last">
                        <h4>Challenge</h4>
                        <p> {monster.challenge_rating}</p>
                    </div> 
                </div> 
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                <div className="property-block">
                    {
                    monster.special_abilities?.[0]?.name
                    ? <h4> {monster.special_abilities[0].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[0]?.desc
                    ? <p> {monster.special_abilities[0].desc} <br /> </p>
                    : ''
                    }
                    
                    {
                    monster.special_abilities?.[1]?.name
                    ? <h4> {monster.special_abilities[1].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[1]?.desc
                    ? <p> {monster.special_abilities[1].desc} <br /> </p>
                    : ''
                    }
                    {
                    monster.special_abilities?.[2]?.name
                    ? <h4> {monster.special_abilities[2].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[2]?.desc
                    ? <p> {monster.special_abilities[2].desc} <br /> </p> 
                    : ''
                    }
                    
                    {
                    monster.special_abilities?.[3]?.name
                    ? <h4> {monster.special_abilities[3].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[3]?.desc
                    ? <p> {monster.special_abilities[3].desc} <br /> </p>
                    : ''
                    }
                </div> 
                <img 
                    src={BUCKET_START + monster.index + '.png'} 
                    alt={monster.name} 
                    // id="monster-card-image"
                    // id="clean-image"
                    // className="img-container layerd"
                    style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}} 
                />
            </div> 
            <div className="section-right">
                <div className="actions">
                    <h3>Actions</h3>
                    <div className="property-block">
                        {
                        monster.actions?.[0]?.name
                        ? <h4> {monster.actions[0].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[0]?.desc
                        ? <p> {monster.actions[0].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[1]?.name
                        ? <h4> {monster.actions[1].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[1]?.desc
                        ? <p> {monster.actions[1].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[2]?.name
                        ? <h4> {monster.actions[2].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[2]?.desc
                        ? <p> {monster.actions[2].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[3]?.name
                        ? <h4> {monster.actions[3].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[3]?.desc
                        ? <p> {monster.actions[3].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[4]?.name
                        ? <h4> {monster.actions[4].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[4]?.desc
                        ? <p> {monster.actions[4].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[5]?.name
                        ? <h4> {monster.actions[5].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[5]?.desc
                        ? <p> {monster.actions[5].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.actions?.[6]?.name
                        ? <h4> {monster.actions[6].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[6]?.desc
                        ? <p> {monster.actions[6].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.actions?.[7]?.name
                        ? <h4> {monster.actions[7].name} </h4>
                        : ''
                        }
                        {
                        monster.actions?.[7]?.desc
                        ? <p> {monster.actions[7].desc} <br /> </p>
                        : ''
                        }
                    </div> 
                    
                </div> 
                <div className="actions">
                    <h3>Legendary Actions</h3>
                    <div className="property-block">
                        {
                        monster.legendary_actions?.[0]?.name
                        ? <h4>{monster.legendary_actions[0].name} </h4>
                        : <h4 className="m-4">"Don't worry fren, you can always make the {monster.name} legendary. Even the Awakened Shrub can be unleashed... ! !"</h4>
                        }
                        {
                        monster.legendary_actions?.[0]?.desc
                        ? <p> {monster.legendary_actions[0].desc} <br /> </p>
                        : <p> - A Silly Goose</p>
                        }
                        
                        {
                        monster.legendary_actions?.[1]?.name
                        ? <h4>{monster.legendary_actions[1].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[1]?.desc
                        ? <p> {monster.legendary_actions[1].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[2]?.name
                        ? <h4>{monster.legendary_actions[2].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[2]?.desc
                        ? <p> {monster.legendary_actions[2].desc} <br /> </p>
                        : ''
                        }
                        <br />
                        {
                        monster.legendary_actions?.[3]?.name
                        ? <h4>{monster.legendary_actions[3].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[3]?.desc
                        ? <p> {monster.legendary_actions[3].desc} </p>
                        : ''
                        }
                    </div> 
                    
                </div> 
            </div>
            {
                onProfile
                ? <>

                    <Link to={{
                        pathname:`/edit/${monster._id}`,
                        
                        state: { monster: true }
                    }}
                    ><button 
                        className="btn btn-outline-success m-1"
                        value={monster._id}
                        // onClick={editMonster}
                        >
                            Update
                    </button></Link>
                    <button 
                        className="btn btn-outline-danger" 
                        value={monster._id} 
                        onClick={deleteMonster}>
                            Delete Monster
                    </button>
                    
                </>
                : ''
            }
            {
                apiMonster
                ? 
                    isSaved
                    ? <button value={monster} type="submit" className="btn btn-danger my-3" disabled>
                    {monster.name} Is Yours Now!
                    </button>
                    : <Form onSubmit={handleSubmit}>
                    <button value={monster} type="submit" className="btn btn-success my-3">
                    Add {monster.name} ?
                    </button>
                </Form>
                
                : ''
            }
            {/* <button className="btn btn-outline-danger" value={monster._id} onClick={deleteMonster}>Delete Monster</button> */}
            <hr className="orange-border bottom" />
            
            </Col>
            </Row>
        : '' 
        }
        </React.Fragment>

        ) // <- the Return Enclosing Paranthesis
}
