import React, { useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import Loading from "../Loading/Loading";
import SolaMonstra from "../SolaMonstra/SolaMonstra";
import MonsterCard from "../MonsterCard/MonsterCard";
import AddMonster from '../AddMonster/AddMonster';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// Different 'translation' than how the monster model is structured. Patience!

export default function EditMonster({ getmonstahurl, user, editMonstra }) { 
    const [monster, setMonster] = useState({});
    const [loading, setLoading] = useState(true);
    const { monsterId } = useParams();
    // console.log(monsterId, '<- Monster ID in question')
    const location = useLocation();
    // console.log(location, '<- Here is where I am')
    const [editState, setEditState] = useState({
        name: '',
        size: '',
        type: '',
        alignment: '',
        armor_class: 0,
        hit_points: 0,
        hit_dice: '',
        hit_points_roll: '',
        speed: {
            burrow: '',
            climb: '',
            fly: '',
            swim: '',
            walk: ''
        },
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        proficiencies: {
            type: [''],
            default: null
        },
        damage_vulnerabilities: {
            type: [''],
            default: null
        },
        damage_resistances: {
            type: [''],
            default: null
        },
        damage_immunities: {
            type: [''],
            default: null
        },
        condition_immunities: {
            type: [''],
            default: null
        },
        senses: {
            blindsight: '',
            darkvision: '',
            passive_perception: '',
            truesight: '',
            tremorsense: ''
        },
        languages: [''],
        challenge_rating: 0,
        xp: 0,
        special_abilities: {
            type: [], 
            default: null
        },
        actions: [''],
        legendary_actions: {
            type: [''],
            default: null
        }
    });

    
    useEffect(() => {
        getMonster()
    }, [])

    async function getMonster() {
        try {
            const response = await monstersAPI.getOne(monsterId);
            console.log(response, ' <- the response in getMonsters')
            setMonster(response.data)
            console.log(monster, '<- The monster!')
            setEditState(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err.message);
        }
    }





    // const [editState, setEditState] = useState({
    //     name: monster.name,
    //     size: monster.size,
    //     type: monster.type,
    //     alignment: monster.alignment,
    //     armor_class: monster.armor_class,
    //     hit_points: monster.hit_points,
    //     hit_dice: monster.hit_dice,
    //     hit_points_roll: monster.hit_points_roll,
    //     speed: {
    //         burrow: monster.speed?.burrow,
    //         climb: monster.speed?.climb,
    //         fly: monster.speed?.fly,
    //         swim: monster.speed?.swim,
    //         walk: monster.speed?.walk
    //     },
    //     strength: monster.strength,
    //     dexterity: monster.dexterity,
    //     constitution: monster.constitution,
    //     intelligence: monster.intelligence,
    //     wisdom: monster.wisdom,
    //     charisma: monster.charisma,
    //     {
    //     [monster.proficiencies]
    //     ? proficiencies: [...monster.proficiencies]
    //     : ''
    //     }
        
    //     proficiencies: [...monster.proficiencies]
        
    //     ,
    //     damage_vulnerabilities: {
    //         type: [...monster.damage_vulnerabilities],
    //         default: null
    //     },
    //     damage_resistances: {
    //         type: [...monster.damage_resistances],
    //         default: null
    //     },
    //     damage_immunities: {
    //         type: [...monster.damage_immunities],
    //         default: null
    //     },
    //     condition_immunities: {
    //         type: [monster.condition_immunities],
    //         default: null
    //     },
    //     senses: {
    //         blindsight: monster.senses.blindsight,
    //         darkvision: monster.senses.darkvision,
    //         passive_perception: monster.senses.passive_perception,
    //         truesight: monster.senses.truesight,
    //         tremorsense: monster.senses.tremorsense
    //     },
    //     languages: [...monster.languages],
    //     challenge_rating: monster.challenge_rating,
    //     xp: monster.xp,
    //     special_abilities: [...monster.special_abilities],
    //     actions: [...monster.actions],
    //     legendary_actions: [...monster.legendary_actions]
    // });

    function handleChange(e) {
            setEditState({
            ...editState,
            [e.target.name]: e.target.value,
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('It is firing!')
        async function homebrew() {
            try {
                const formData = new FormData();
                    // let required = ['special_abilities', 'proficiencies', 'damage_vulnerabilities', 'damage_resistances',  'damage_immunities', 'condition_immunities', 'actions', 'senses', 'legendary_actions', 'speed', 'index', 'name', 'size', 'type', 'alignment', 'armor_class', 'hit_points', 'hit_dice', 'hit_points_roll', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'languages', 'challenge_rating', 'xp']
                    for (let key in monster) {
                        // if (required.includes(key)) {
                        formData[key] = editState[key]
                        formData.forEach((item) => console.log(item));
                        // }
                    }
                    editMonstra(formData);
            } catch (err) {
                console.log()
            }
        }
        homebrew();
        getMonster();
        
    }

    if (loading) {
        return (
        <>
            <Loading user={user} />
        </>
        );
    }
    
    return (
    <Row >
        {/* {
            state
            ? 'Hello!'
            : 'Nope'
        } */}
        {/* {
            monster
            ? 'Hello!'
            : 'Nope'
        } */}
        
        <Form onSubmit={handleSubmit}>
        <Col className="stat-block wide" >
            <hr className="orange-border" />
            <div className="section-left">
                <div className="creature-heading">
                    <h1>{monster.name}</h1>
                    <Form.Group className="my-1" controlId="editName">
                        <Form.Control 
                            name="name"
                            type="text" 
                            placeholder={monster.name}
                            value={editState.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <h2>{monster.size} {monster.type}, {monster.alignment}</h2>
                    <Row>
                    <Form.Group as={Col} className="my-1" controlId="editName">
                        <Form.Control 
                            name="size"
                            type="text" 
                            placeholder={monster.size}
                            value={editState.size}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            name="type"
                            type="text" 
                            placeholder={monster.type}
                            value={editState.type}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            name="alignment"
                            type="text" 
                            placeholder={monster.alignment}
                            value={editState.alignment}
                            onChange={handleChange}
                            />
                    </Form.Group>
                    </Row>
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
                    src={process.env.PUBLIC_URL + '/images/' + monster.index + '.png'} 
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
            <button type="submit" className="btn btn-lg btn-outline-primary m-1">
                Homebrew!
            </button>
            <hr className="orange-border bottom" />
            
            </Col>
        </Form>
        
        {/* <SolaMonstra monster={monstroso} key={monstroso.index} isSaved={isSaved} /> */}
    </Row>
    );
}


