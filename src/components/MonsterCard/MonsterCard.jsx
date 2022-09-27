import './MonsterCard.css';
import React, { useState, useEffect } from 'react';
import * as monstersAPI from '../../utils/monsterApi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function MonsterCard({ monsters, deleteMonster }) {
    // const [userCharactersState, setUserCharactersState] = useState(null);
    // style={{maxWidth: 50 + 'vw'}}
    //  style={{maxWidth: 25 + 'vw'}}
    // style={{maxWidth: 100 + 'vw', height: 100 + 'vh'}}
    console.log(monsters.length, '<- Monster count')
    // const [monsterState, setMonsterState] = useState({ monsters })

    // async function deleteMonster(monster) {
    //     monster.preventDefault();
    //     console.log(monster.target.value, '<- What are you in here?')
    //     monstersAPI.deleteMonster(monster.target.value)
    //     // setMonsterState({ monsters })
    // }

    // useEffect(() => {
    //     monstras()
    // }, [monsterState])
    
    

    let monstras = monsters.filter(monster => (monster.is_active === undefined || monster.is_active === 1)).map((monster) => {
        // console.log(monster.condition_immunities, "What's going on, condition immunities for", monster.name)
        return (
            <React.Fragment>
            <div className="stat-block wide">
            <hr className="orange-border" />
            <div className="section-left">
                <div className="creature-heading">
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
                        {/* <p>{monster.speed}</p> */}
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
                        monster.proficiencies[0].proficiency?.name
                        ? <p> {monster.proficiencies[0].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[0]?.value
                        ? <p> {monster.proficiencies[0].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[1]?.proficiency.name
                        ? <p> {monster.proficiencies[1].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[1]?.value
                        ? <p> {monster.proficiencies[1].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[2]?.proficiency.name
                        ? <p> {monster.proficiencies[2].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[2]?.value
                        ? <p> {monster.proficiencies[2].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[3]?.proficiency.name
                        ? <p> {monster.proficiencies[3].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[3]?.value
                        ? <p> {monster.proficiencies[3].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[4]?.proficiency.name
                        ? <p> {monster.proficiencies[4].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[4]?.value
                        ? <p> {monster.proficiencies[4].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[5]?.proficiency.name
                        ? <p> {monster.proficiencies[5].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[5]?.value
                        ? <p> {monster.proficiencies[5].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[6]?.proficiency.name
                        ? <p> {monster.proficiencies[6].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[6]?.value
                        ? <p> {monster.proficiencies[6].value}, </p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies[7]?.proficiency.name
                        ? <p> {monster.proficiencies[7].proficiency.name} </p>
                        : ''
                        }
                        {
                        monster.proficiencies[7]?.value
                        ? <p> {monster.proficiencies[7].value} </p>
                        : ''
                        }
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="property-line first">
                        <h4>Condition Immunities</h4>
                        {/* <p>{monster.condition_immunities[0]}</p> */}
                        {
                        monster.condition_immunities[0]?.name 
                        ?  <p> {monster.condition_immunities[0].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[1]?.name 
                        ?  <p> {monster.condition_immunities[1].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[2]?.name 
                        ?  <p> {monster.condition_immunities[2].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[3]?.name 
                        ?  <p> {monster.condition_immunities[3].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[4]?.name 
                        ?  <p> {monster.condition_immunities[4].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[5]?.name 
                        ?  <p> {monster.condition_immunities[5].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[6]?.name 
                        ?  <p> {monster.condition_immunities[6].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[7]?.name 
                        ?  <p> {monster.condition_immunities[7].name} </p>
                        : ''
                        }
                        {
                        monster.condition_immunities[8]?.name 
                        ?  <p> {monster.condition_immunities[8].name} </p>
                        : ''
                        }
                    </div>
                    <div className="property-line">
                        <h4>Damage Immunities</h4>
                        {/* <p>{monster.damage_immunities}</p> */}
                        {
                        monster.damage_immunities[0]
                        ? <p> {monster.damage_immunities[0].charAt(0).toUpperCase() + monster.damage_immunities[0].slice(1)} </p>
                        : ''
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Damage Resistances</h4>
                        {/* <p>{monster.damage_resistances[0]}</p> */}
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
                        {/* <p>{monster.damage_vulnerabilities[0]}</p> */}
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
                    monster.special_abilities[0].name
                    ? <h4> {monster.special_abilities[0].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities[0].desc
                    ? <p> {monster.special_abilities[0].desc} <br /> </p>
                    : ''
                    }
                    
                    {
                    monster.special_abilities[1]?.name
                    ? <h4> {monster.special_abilities[1].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities[1]?.desc
                    ? <p> {monster.special_abilities[1].desc} <br /> </p>
                    : ''
                    }
                    {/* {
                    monster.special_abilities[1]?.spellcasting.spells[0].name
                    ? <p> {monster.special_abilities[1].spellcasting.spells[0].name}, Level {monster.special_abilities[1].spellcasting.spells[0].level}, Type: {monster.special_abilities[1].spellcasting.spells[0].usage.type}</p>
                    : ''
                    } */}
                    {
                    monster.special_abilities[2]?.name
                    ? <h4> {monster.special_abilities[2].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities[2]?.desc
                    ? <p> {monster.special_abilities[2].desc} <br /> </p> 
                    : ''
                    }
                    
                    {
                    monster.special_abilities[3]?.name
                    ? <h4> {monster.special_abilities[3].name} </h4>
                    : ''
                    }
                    {
                    monster.special_abilities[3]?.desc
                    ? <p> {monster.special_abilities[3].desc} <br /> </p>
                    : ''
                    }
                </div> 
                <img src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'} alt={monster.name} id="monster-card-image" />
            </div> 
            <div className="section-right">
                <div className="actions">
                    <h3>Actions</h3>
                    {/* {monster.actions} */}
                    <div className="property-block">
                        {
                        monster.actions[0].name
                        ? <h4> {monster.actions[0].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[0].desc
                        ? <p> {monster.actions[0].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions[1]?.name
                        ? <h4> {monster.actions[1].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[1]?.desc
                        ? <p> {monster.actions[1].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions[2]?.name
                        ? <h4> {monster.actions[2].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[2]?.desc
                        ? <p> {monster.actions[2].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions[3]?.name
                        ? <h4> {monster.actions[3].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[3]?.desc
                        ? <p> {monster.actions[3].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions[4]?.name
                        ? <h4> {monster.actions[4].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[4]?.desc
                        ? <p> {monster.actions[4].desc} <br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions[5]?.name
                        ? <h4> {monster.actions[5].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[5]?.desc
                        ? <p> {monster.actions[5].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.actions[6]?.name
                        ? <h4> {monster.actions[6].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[6]?.desc
                        ? <p> {monster.actions[6].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.actions[7]?.name
                        ? <h4> {monster.actions[7].name} </h4>
                        : ''
                        }
                        {
                        monster.actions[7]?.desc
                        ? <p> {monster.actions[7].desc} <br /> </p>
                        : ''
                        }
                    </div> 
                    
                </div> 
                <div className="actions">
                    <h3>Legendary Actions</h3>
                    {/* {monster.legendary_actions} */}
                    <div className="property-block">
                        {
                        monster.legendary_actions[0]?.name
                        ? <h4>{monster.legendary_actions[0].name} </h4>
                        : <h4 className="m-4">"Don't worry fren, you can always make the {monster.name} legendary. Even the Awakened Shrub can be unleashed... ! !"</h4>
                        }
                        {
                        monster.legendary_actions[0]?.desc
                        ? <p> {monster.legendary_actions[0].desc} <br /> </p>
                        : <p> - A Silly Goose</p>
                        }
                        
                        {
                        monster.legendary_actions[1]?.name
                        ? <h4>{monster.legendary_actions[1].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions[1]?.desc
                        ? <p> {monster.legendary_actions[1].desc} <br /> </p>
                        : ''
                        }
                        {
                        monster.legendary_actions[2]?.name
                        ? <h4>{monster.legendary_actions[2].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions[2]?.desc
                        ? <p> {monster.legendary_actions[2].desc} <br /> </p>
                        : ''
                        }
                        <br />
                        {
                        monster.legendary_actions[3]?.name
                        ? <h4>{monster.legendary_actions[3].name} </h4>
                        : ''
                        }
                        {
                        monster.legendary_actions[3]?.desc
                        ? <p> {monster.legendary_actions[3].desc} </p>
                        : ''
                        }
                    </div> 
                    
                </div>
                <Form> 
                <button className="btn" value={monster._id} onClick={deleteMonster}>Delete Monster</button>
                </Form>
            </div> 
            <hr className="orange-border bottom" />
        </div>
        </React.Fragment>
        )
    })

    return (
        <React.Fragment>
            <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}>
                
                {monstras}
                
            </Row>
        </React.Fragment>
    );
}
