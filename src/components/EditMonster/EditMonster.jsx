import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import * as monstersAPI from '../../utils/monsterApi';
import Loading from "../Loading/Loading";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

// Different 'translation' than how the monster model is structured. Patience!

export default function EditMonster({ getmonstahurl, user, editMonstra }) { 
    const [monster, setMonster] = useState({});
    const [loading, setLoading] = useState(true);
    const { monsterId } = useParams();
    // console.log(monsterId, '<- Monster ID in question')
    const location = useLocation();
    const BUCKET_START = 'https://collectionbucketman.s3.amazonaws.com/dungeons/';
    
    // console.log(location, '<- Here is where I am')
    const [editState, setEditState] = useState({
        name: 'Name?',
        size: 'Size?',
        type: 'Type?',
        alignment: 'Alignment',
        armor_class: 0,
        hit_points: 0,
        hit_dice: 'Hit Dice',
        hit_points_roll: 'Hit Points',
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
        proficiencies: [
            {
                value: 'First Pro Value',
                proficiency: {
                    name: 'First Pro name'
                }
                
            },
            {
                value: 'Second Pro Value',
                proficiency: {
                    name: ''
                }
            },
            {
                value: 'Third Pro Value',
                proficiency: {
                    name: ''
                }
            },
            {
                value: 'Fourth Pro Value',
                proficiency: {
                    name: ''
                }
            },
            {
                value: 'Fifth Pro Value',
                proficiency: {
                    name: ''
                }
            },
            {
                value: '',
                proficiency: {
                    name: ''
                }
            },
            {
                value: '',
                proficiency: {
                    name: ''
                }
            },
            {
                value: '',
                proficiency: {
                    name: ''
                }
            }
    ],
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
        condition_immunities: ['']
        ,
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
        special_abilities: [''],
        actions: [''],
        legendary_actions: [
            {
                desc: '',
                name: ''
            
            },
            {
                desc: '',
                name: ''
            
            },
            {
                desc: '',
                name: ''
            
            },
            {
                desc: '',
                name: ''
            
            },
            {
                desc: '',
                name: ''
            
            },
        ]
    });

    
    useEffect(() => {
        // setEditState(editState)
        getMonster()
        
    }, [])

    async function getMonster() {
        try {
            const response = await monstersAPI.getOne(monsterId);
            console.log(response, ' <- the response in getMonsters')
            setMonster(response.data)
            console.log(monster, '<- The monster!')
            setEditState(response.data) // It's because of this!
            setLoading(false)
        } catch (err) {
            console.log(err.message);
        }
    }

    function handleChange(e) {
        // const { name, value }  = e.target;
        // editState[name] = value;
        console.log(e.target.name, '<- Name', e.target.value, '<- Value')
        setEditState({
        ...editState
        ,
        [e.target.name]: e.target.value,
        });
        console.log(editState.visibility, '<- And what are you currently?')
    }
    function handleSpeed(e) {
        const { name, value }  = e.target;
        editState.speed[name] = value;
        setEditState({...editState})
    }

    function handleSenses(e) {
        e.preventDefault();
        const { name, value }  = e.target;
        editState.senses[name] = value;
        setEditState({...editState})
    }

    function handleConditionImmunities(e) {
        const { name, value }  = e.target;
        editState.condition_immunities[name].name = value;
        setEditState({...editState})
    }

    function handleDamageImmunities(e) {
        const { name, value }  = e.target;
        editState.damage_immunities[name] = value;
        setEditState({...editState})
    }

    function handleDamageResistances(e) {
        const { name, value }  = e.target;
        editState.damage_resistances[name] = value;
        setEditState({...editState})
    }

    function handleDamageVulberabilities(e) {
        const { name, value }  = e.target;
        editState.damage_vulnerabilities[name] = value;
        setEditState({...editState})
    }

    function handleProficiencyName(e) {
        const { name, value }  = e.target;
        if (editState.proficiencies[name].proficiency.name === false) {
            setEditState({
                ...editState,
                [editState.proficiencies[name].proficiency.name]: value
            })
        }
        editState.proficiencies[name].proficiency.name = value;
        setEditState({...editState})
    }

    function handleProficiencyValue(e) {
        console.log(e.target.value, '<- What value are you?')
        console.log(e.target.name, '<- What name are you?')
        const { name, value }  = e.target;
        editState.proficiencies[name].value = value;
        setEditState({...editState})
    }

    function handleSpecialAbilitiesName(e) {
        const { name, value }  = e.target;
        editState.special_abilities[name].name = value;
        setEditState({...editState})
    }
    function handleSpecialAbilitiesDesc(e) {
        const { name, value }  = e.target;
        editState.special_abilities[name].desc = value;
        setEditState({...editState})
    }

    function handleActionsName(e) {
        const { name, value }  = e.target;
        editState.actions[name].name = value;
        setEditState({...editState})
    }
    function handleActionsDesc(e) {
        const { name, value }  = e.target;
        editState.actions[name].desc = value;
        setEditState({...editState})
    }
    function handleLegendaryActionsName(e) {
        const { name, value }  = e.target;
        editState.legendary_actions[name].name = value;
        setEditState({...editState})
    }
    function handleLegendaryActionsDesc(e) {
        const { name, value }  = e.target;
        editState.legendary_actions[name].desc = value;
        setEditState({...editState})
    }

    function handleVisibility(e) {
        const { name, value }  = e.target;
        console.log(name, value, '<- Name and Value in Visibility Handler')
        editState[name] = value;
        setEditState({...editState})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('It is firing!')
        async function homebrew() {
            try {
                const formData = new FormData();
                // formData.replace('speed.walk', editState.walk)
                    // let required = ['special_abilities', 'proficiencies', 'damage_vulnerabilities', 'damage_resistances',  'damage_immunities', 'condition_immunities', 'actions', 'senses', 'legendary_actions', 'speed', 'index', 'name', 'size', 'type', 'alignment', 'armor_class', 'hit_points', 'hit_dice', 'hit_points_roll', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'languages', 'challenge_rating', 'xp']
                    for (let key in monster) {
                        // if (required.includes(key)) {
                        formData[key] = editState[key]
                        // formData.forEach((item) => console.log(item));
                        // }
                        // if (key === 'walk') {
                        //     formData.append('speed.walk', editState.walk);
                            
                        // }
                        // formData.append('speed.walk', editState.walk)
                        formData.forEach((item) => console.log(item));
                    }
                    // formData.replace('speed.walk', editState.walk)
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
    <Row className="justify-content-center" xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={2 | 'auto'}>
        
        <Col className="stat-block wide">
        <Form onSubmit={handleSubmit}>
            <hr className="orange-border" />
            <div className="section-left">
                <div className="creature-heading">
                    <h1 >{monster.name}</h1>
                    <input 
                            name="name"
                            
                            // style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.name}
                            value={editState.name}
                            onChange={handleChange}
                    />
                    <h2>{monster.size} {monster.type}, {monster.alignment}</h2>
                    <Row>
                    <Form.Group as={Col} className="my-1" controlId="editName">
                        <input 
                            name="size"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.size}
                            value={editState.size}
                            onChange={handleChange}
                        />
                        <input
                            name="type"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.type}
                            value={editState.type}
                            onChange={handleChange}
                        />
                        <input
                            name="alignment"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.alignment}
                            value={editState.alignment}
                            onChange={handleChange}
                            className="mb-2"
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
                        <input
                            className=""
                            style={{ 'marginLeft': 1 + 'vw' }}
                            name="armor_class"
                            type="text" 
                            placeholder={monster.armor_class}
                            value={editState.armor_class}
                            onChange={handleChange}
                        />
                    </div> 
                    <div className="property-line">
                        <h4>Hit Points</h4>
                        <p> {monster.hit_points}</p>
                        <input
                            name="hit_points"
                            className="my-1"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.hit_points}
                            value={editState.hit_points}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="property-line">
                        <h4>Hit Dice</h4>
                        <p> ({monster.hit_dice})</p>
                        <input
                        name="hit_dice"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.hit_dice}
                        value={editState.hit_dice}
                        onChange={handleChange}
                        className="mb-2"
                        />
                    </div> 
                    <div className="property-line last"> 
                        <h4>Speed</h4>
                        {
                        monster.speed?.burrow
                        ? <><p> Burrow: {monster.speed.burrow}</p>
                        <input
                            name="burrow"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.speed.burrow}
                            value={editState.speed.burrow}
                            onChange={handleSpeed}
                            className="mb-2"
                            /><br /></>
                        : <><input
                        name="burrow"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Burrow?"
                        value={editState.speed.burrow}
                        onChange={handleSpeed}
                        className="mb-2"
                        /><br /></>
                        }
                        {
                        monster.speed?.climb
                        ? <><p> Climb: {monster.speed.climb}</p>
                        <input
                            name="climb"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.speed.climb}
                            value={editState.speed.climb}
                            onChange={handleSpeed}
                            className="mb-2"
                            /><br /></>
                        : <><input
                        name="climb"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Climb?"
                        value={editState.speed.climb}
                        onChange={handleSpeed}
                        className="mb-2"
                        /><br /></>
                        }
                        {
                        monster.speed?.fly
                        ? <><p> Flight: {monster.speed.fly}</p>
                        <input
                            name="fly"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.speed.fly}
                            value={editState.speed.fly}
                            onChange={handleSpeed}
                            className="mb-2"
                            /><br /></>
                        : <><input
                        name="fly"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Fly?"
                        value={editState.speed.fly}
                        onChange={handleSpeed}
                        className="mb-2"
                        /><br /></>
                        }
                        {
                        monster.speed?.swim
                        ? <><p> Swim: {monster.speed.swim}</p>
                        <input
                            name="swim"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.speed.swim}
                            value={editState.speed.swim}
                            onChange={handleSpeed}
                            className="mb-2"
                            /><br /></>
                        : <><input
                        name="swim"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Swim?"
                        value={editState.speed.swim}
                        onChange={handleSpeed}
                        className="mb-2"
                        /><br /></>
                        }
                        {
                        monster.speed?.walk
                        ? <><p> Walk: {monster.speed.walk}</p>
                        <input
                            name="walk"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.speed.walk}
                            value={editState.speed.walk}
                            onChange={handleSpeed}
                            className="mb-2"
                            /><br /></>
                        : <><input
                        name="walk"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Walk?"
                        value={editState.speed.walk}
                        onChange={handleSpeed}
                        className="mb-2"
                        /><br /></>
                        }
                    </div>
                    <Form.Group as={Col} className="my-1" controlId="editName">
                    </Form.Group> 
                    <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                    <div className="abilities">
                        <div className="ability-strength">
                            <h4>STR</h4>
                            <p>{monster.strength}</p>
                            <input
                            name="strength"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.strength}
                            value={editState.strength}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                        <div className="ability-dexterity">
                            <h4>DEX</h4>
                            <p>{monster.dexterity}</p>
                            <input
                            name="dexterity"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.dexterity}
                            value={editState.dexterity}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                        <div className="ability-constitution">
                            <h4>CON</h4>
                            <p>{monster.constitution}</p>
                            <input
                            name="constitution"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.constitution}
                            value={editState.constitution}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                        <div className="ability-intelligence">
                            <h4>INT</h4>
                            <p>{monster.intelligence}</p>
                            <input
                            name="intelligence"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.intelligence}
                            value={editState.intelligence}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                        <div className="ability-wisdom">
                            <h4>WIS</h4>
                            <p>{monster.wisdom}</p>
                            <input
                            name="wisdom"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.wisdom}
                            value={editState.wisdom}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                        <div className="ability-charisma">
                            <h4>CHA</h4>
                            <p>{monster.charisma}</p>
                            <input
                            name="charisma"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.charisma}
                            value={editState.charisma}
                            onChange={handleChange}
                            className="mb-2"
                            />
                        </div> 
                    </div>
                    <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="property-line first last">
                        <h4>Proficiencies</h4>
                        {
                        monster.proficiencies?.[0]?.proficiency.name
                        ? <p> {monster.proficiencies[0].proficiency.name} - {monster.proficiencies[0].value}
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.proficiencies[0].proficiency.name}
                        value={editState.proficiencies[0].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='First Proficiency Name?'
                        value={editState.proficiencies?.[0]?.proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        />
                        }
                        {
                        monster.proficiencies?.[0]?.value
                        ? <p><input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.proficiencies[0].value}
                        value={editState.proficiencies[0].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='First Proficiency Value?'
                        value={editState.proficiencies?.[0]?.value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        />
                        }
                        
                        {
                        monster.proficiencies?.[1]?.proficiency.name
                        ? <p> {monster.proficiencies[1].proficiency.name} - {monster.proficiencies[1].value}
                        <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.proficiencies[1].proficiency.name}
                        value={editState.proficiencies[1].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[1]?.value
                        ? <p>  
                        <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.proficiencies[1].value}
                        value={editState.proficiencies[1].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[2]?.proficiency.name
                        ? <p> {monster.proficiencies[2].proficiency.name} - {monster.proficiencies[2].value} 
                        <input
                        name='2'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={editState.proficiencies[2].proficiency.name}
                        value={editState.proficiencies[2].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[2]?.value
                        ? <p> 
                        <input
                        name='2'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='Third Proficiency Value?'
                        value={editState.proficiencies[2].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[3]?.proficiency.name
                        ? <p> {monster.proficiencies[3].proficiency.name} - {monster.proficiencies[3].value}
                        <input
                        name='3'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='Fourth Proficiency Name?'
                        value={editState.proficiencies[3].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[3]?.value
                        ? <p>  
                        <input
                        name='3'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Fourth Proficiency Value?'
                        value={editState.proficiencies[3].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[4]?.proficiency.name
                        ? <p> {monster.proficiencies[4].proficiency.name} - {monster.proficiencies[4].value}
                        <input
                        name='4'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Third Proficiency Name?'
                        value={editState.proficiencies[4].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[4]?.value
                        ? <p>  
                        <input
                        name='4'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Fifth Proficiency Value?'
                        value={editState.proficiencies[4].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[5]?.proficiency.name
                        ? <p> {monster.proficiencies[5].proficiency.name} - {monster.proficiencies[5].value}
                        <input
                        name='5'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Sixth Proficiency Name?'
                        value={editState.proficiencies[5].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[5]?.value
                        ? <p>  
                        <input
                        name='5'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Sixth Proficiency Value?'
                        value={editState.proficiencies[5].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[6]?.proficiency.name
                        ? <p> {monster.proficiencies[6].proficiency.name} - {monster.proficiencies[6].value}
                        <input
                        name='6'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Seventh Proficiency Name?'
                        value={editState.proficiencies[6].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[6]?.value
                        ? <p>  
                        <input
                        name='6'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Seventh Proficiency Value?'
                        value={editState.proficiencies[6].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                        
                        {
                        monster.proficiencies?.[7]?.proficiency.name
                        ? <p> {monster.proficiencies[7].proficiency.name} - {monster.proficiencies[7].value}
                        <input
                        name='7'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='An Eigth Proficiency Name?'
                        value={editState.proficiencies[7].proficiency.name}
                        onChange={handleProficiencyName}
                        className="mb-2"
                        /></p>
                        : ''
                        }
                        {
                        monster.proficiencies?.[7]?.value
                        ? <p>  
                        <input
                        name='7'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder='A Eighth Proficiency Value?'
                        value={editState.proficiencies[7].value}
                        onChange={handleProficiencyValue}
                        className="mb-2"
                        /><br /></p>
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
                        ?  <p> {monster.condition_immunities[0].name} <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.condition_immunities[0].name}
                        value={editState.condition_immunities[0].name}
                        onChange={handleConditionImmunities}
                        className="mb-2"
                        /></p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Conditional Immunities?"
                        value={editState.condition_immunities[0].name}
                        onChange={handleConditionImmunities}
                        className="mb-2"
                        />
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
                        ? <p> {monster.damage_immunities[0].charAt(0).toUpperCase() + monster.damage_immunities[0].slice(1)} 
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.damage_immunities[0].charAt(0).toUpperCase() + monster.damage_immunities[0].slice(1)}
                        value={editState.damage_immunities[0]}
                        onChange={handleDamageImmunities}
                        className="mb-2"
                        />
                        </p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Damage Immunities?"
                        value={editState.damage_immunities[0]}
                        onChange={handleDamageImmunities}
                        className="mb-2"
                        />
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Damage Resistances</h4>
                        {
                        monster.damage_resistances?.[0] 
                        ?  <p> {monster.damage_resistances[0].charAt(0).toUpperCase() + monster.damage_resistances[0].slice(1)} 
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.damage_resistances[0].charAt(0).toUpperCase() + monster.damage_resistances[0].slice(1)}
                        value={editState.damage_resistances[0]}
                        onChange={handleDamageResistances}
                        className="mb-2"
                        /></p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Damage Resistances?"
                        value={editState.damage_resistances[0]}
                        onChange={handleDamageResistances}
                        className="mb-2"
                        />
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
                        ?  <p> {monster.damage_vulnerabilities[0]} 
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.damage_vulnerabilities[0].charAt(0).toUpperCase() + monster.damage_vulnerabilities[0].slice(1)}
                        value={editState.damage_vulnerabilities[0]}
                        onChange={handleDamageVulberabilities}
                        className="mb-2"
                        /></p>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Damage Vulnerabilities?"
                        value={editState.damage_vulnerabilities[0]}
                        onChange={handleDamageVulberabilities}
                        className="mb-2"
                        />
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
                        ? <p> Blindsight: {monster.senses.blindsight} 
                        <input
                        name="blindsight"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.senses.blindsight}
                        value={editState.senses.blindsight}
                        onChange={handleSenses}
                        className="mb-2"
                        /><br /></p>
                        : <input
                        name="blindsight"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Blindsight?"
                        value={editState.senses.blindsight}
                        onChange={handleSenses}
                        className="mb-2"
                        />
                        }
                        {
                        monster.senses?.darkvision
                        ? <p> Darkvision: {monster.senses.darkvision} 
                        <input
                        name="darkvision"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder={monster.senses.darkvision}
                        value={editState.senses.darkvision}
                        onChange={handleSenses}
                        className="mb-2"
                        /><br /></p>
                        : <input
                        name="darkvision"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Darkvision?"
                        value={editState.senses.darkvision}
                        onChange={handleSenses}
                        className="mb-2"
                        />
                        }
                        {
                        monster.senses?.passive_perception
                        ? <p> Passive Perception: {monster.senses.passive_perception}
                        <input
                            name="passive_perception"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.senses.passive_perception}
                            value={editState.senses.passive_perception}
                            onChange={handleSenses}
                            className="mb-2"
                            /><br /></p>
                        : <input
                        name="passive_perception"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Passive Perception?"
                        value={editState.senses.passive_perception}
                        onChange={handleSenses}
                        className="mb-2"
                        />
                        }
                        {
                        monster.senses?.truesight
                        ? <p> Truesight: {monster.senses.truesight}
                        <input
                            name="truesight"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.senses.truesight}
                            value={editState.senses.truesight}
                            onChange={handleSenses}
                            className="mb-2"
                            /><br /></p>
                        : <input
                        name="truesight"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Truesight?"
                        value={editState.senses.truesight}
                        onChange={handleSenses}
                        className="mb-2"
                        />
                        }
                        {
                        monster.senses?.tremorsense
                        ? <p> Tremorsense: {monster.senses.tremorsense}
                        <input
                            name="tremorsense"
                            style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.senses.tremorsense}
                            value={editState.senses.tremorsense}
                            onChange={handleSenses}
                            className="mb-2"
                            /><br /></p>
                        : <><input
                        name="tremorsense"
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Tremorsense?"
                        value={editState.senses.tremorsense}
                        onChange={handleSenses}
                        className="mb-2"
                        /><br /></>
                        }
                    </div> 
                    <div className="property-line">
                        <h4>Languages</h4>
                        <p> {monster.languages} <input
                            name="languages"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.languages}
                            value={editState.languages}
                            onChange={handleChange}
                            className="mb-2"
                            /></p>
                    </div> 
                    <div className="property-line">
                        <h4>Challenge</h4>
                        <p> {monster.challenge_rating} <input
                            name="challenge_rating"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.challenge_rating}
                            value={editState.challenge_rating}
                            onChange={handleChange}
                            className="mb-2"
                            /></p>
                    </div>
                    <div className="property-line last">
                        <h4>Experience</h4>
                        <p> {monster.xp} <input
                            name="xp"
                            //style={{ 'marginLeft': 1 + 'vw' }}
                            type="text" 
                            placeholder={monster.xp}
                            value={editState.xp}
                            onChange={handleChange}
                            className="mb-2"
                            /></p>
                    </div> 
                </div> 
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                <div className="property-block">
                    {
                    monster.special_abilities?.[0]?.name
                    ? <h4> {monster.special_abilities[0].name} 
                    <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[0].name}
                        onChange={handleSpecialAbilitiesName}
                        className="mb-2"
                        /><br /></h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[0]?.desc
                    ? <p> {monster.special_abilities[0].desc} <br />
                    <textarea
                        name='0'
                        style={{ 'width': 100 + '%', 'height': 100 + 'px' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[0].desc}
                        onChange={handleSpecialAbilitiesDesc}
                        className="mb-2"
                        /><br /> </p>
                    : ''
                    }
                    
                    {
                    monster.special_abilities?.[1]?.name
                    ? <h4> {monster.special_abilities[1].name} 
                    <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[1].name}
                        onChange={handleSpecialAbilitiesName}
                        className="mb-2"
                        /><br /></h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[1]?.desc
                    ? <p> {monster.special_abilities[1].desc} 
                    <textarea
                        name='1'
                        style={{ 'width': 100 + '%', 'height': 100 + 'px' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[1].desc}
                        onChange={handleSpecialAbilitiesDesc}
                        className="mb-2"
                        /><br /> </p>
                    : ''
                    }
                    {
                    monster.special_abilities?.[2]?.name
                    ? <h4> {monster.special_abilities[2].name} 
                    <input
                        name='2'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[2].name}
                        onChange={handleSpecialAbilitiesName}
                        className="mb-2"
                        /><br /></h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[2]?.desc
                    ? <p> {monster.special_abilities[2].desc} 
                    <textarea
                        name='2'
                        style={{ 'width': 100 + '%', 'height': 100 + 'px' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[2].desc}
                        onChange={handleSpecialAbilitiesDesc}
                        className="mb-2"
                        /><br /> </p> 
                    : ''
                    }
                    
                    {
                    monster.special_abilities?.[3]?.name
                    ? <h4> {monster.special_abilities[3].name} 
                    <input
                        name='3'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[3].name}
                        onChange={handleSpecialAbilitiesName}
                        className="mb-2"
                        /><br /></h4>
                    : ''
                    }
                    {
                    monster.special_abilities?.[3]?.desc
                    ? <p> {monster.special_abilities[3].desc} 
                    <textarea
                        name='3'
                        style={{ 'width': 100 + '%', 'height': 100 + 'px' }}
                        type="text" 
                        placeholder="Special Abilities?"
                        value={editState.special_abilities[3].desc}
                        onChange={handleSpecialAbilitiesDesc}
                        className="mb-2"
                        /><br /> </p>
                    : ''
                    }
                </div> 
                <img 
                    src={BUCKET_START + monster.index + ".png"} 
                    alt={monster.name} 
                    // id="monster-card-image"
                    // id="clean-image"
                    // className="img-container layerd"
                    style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}} 
                />
            </div> 
            <div className="section-right">
                <div className="actions">
                {/* <img 
                    src={BUCKET_START + monster.index + ".png"} 
                    alt={monster.name} 
                    // id="monster-card-image"
                    // id="clean-image"
                    // className="img-container layerd"
                    style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}} 
                /> */}
                    <h3>Actions</h3>
                    <div className="property-block">
                        {
                        monster.actions?.[0]?.name
                        ? <h4> {monster.actions[0].name} 
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[0].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[0]?.desc
                        ? <p> {monster.actions[0].desc} 
                        <textarea
                        name='0'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[0].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[1]?.name
                        ? <h4> {monster.actions[1].name} 
                        <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[1].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[1]?.desc
                        ? <p> {monster.actions[1].desc} 
                        <textarea
                        name='1'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[1].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[2]?.name
                        ? <h4> {monster.actions[2].name} 
                        <input
                        name='2'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[2].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[2]?.desc
                        ? <p> {monster.actions[2].desc} 
                        <textarea
                        name='2'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[2].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[3]?.name
                        ? <h4> {monster.actions[3].name} 
                        <input
                        name='3'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[3].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[3]?.desc
                        ? <p> {monster.actions[3].desc} 
                        <textarea
                        name='3'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[3].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[4]?.name
                        ? <h4> {monster.actions[4].name} 
                        <input
                        name='4'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[4].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[4]?.desc
                        ? <p> {monster.actions[4].desc} 
                        <textarea
                        name='4'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[4].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        
                        {
                        monster.actions?.[5]?.name
                        ? <h4> {monster.actions[5].name} 
                        <input
                        name='5'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[5].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[5]?.desc
                        ? <p> {monster.actions[5].desc} 
                        <textarea
                        name='5'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[5].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        {
                        monster.actions?.[6]?.name
                        ? <h4> {monster.actions[6].name} 
                        <input
                        name='6'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[6].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[6]?.desc
                        ? <p> {monster.actions[6].desc} 
                        <textarea
                        name='6'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[6].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        {
                        monster.actions?.[7]?.name
                        ? <h4> {monster.actions[7].name} 
                        <input
                        name='7'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[7].name}
                        onChange={handleActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : ''
                        }
                        {
                        monster.actions?.[7]?.desc
                        ? <p> {monster.actions[7].desc} 
                        <textarea
                        name='7'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Actions?"
                        value={editState.actions[7].desc}
                        onChange={handleActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                    </div> 
                    
                </div> 
                <div className="actions">
                    <h3>Legendary Actions</h3>
                    <div className="property-block">
                        {
                        monster.legendary_actions?.[0]?.name
                        ? <h4>{monster.legendary_actions[0].name} 
                        <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[0].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        /> <br /></h4>
                        : <input
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[0].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        />
                        }
                        {
                        monster.legendary_actions?.[0]?.desc
                        ? <p> {monster.legendary_actions[0].desc} <br />
                        <textarea
                        name='0'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[0].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        /> <br /> 
                        </p>
                        : <textarea
                        name='0'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[0].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        />
                        }
                        
                        {
                        monster.legendary_actions?.[1]?.name
                        ? <h4>{monster.legendary_actions[1].name} 
                        <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[1].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        /><br /></h4>
                        : <input
                        name='1'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[1].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        />
                        }
                        {
                        monster.legendary_actions?.[1]?.desc
                        ? <p> {monster.legendary_actions[1].desc} 
                        <input
                        name='1'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[1].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : <textarea
                        name='0'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[0].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        />
                        }
                        {
                        monster.legendary_actions?.[2]?.name
                        ? <h4>{monster.legendary_actions[2].name} 
                        <input
                        name='2'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[2].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        /><br /></h4>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[2]?.desc
                        ? <p> {monster.legendary_actions[2].desc} 
                        <textarea
                        name='2'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[2].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        /><br /> </p>
                        : ''
                        }
                        <br />
                        {
                        monster.legendary_actions?.[3]?.name
                        ? <h4>{monster.legendary_actions[3].name} 
                        <input
                        name='3'
                        style={{ 'marginLeft': 1 + 'vw' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[3].name}
                        onChange={handleLegendaryActionsName}
                        className="mb-2"
                        /><br /></h4>
                        : ''
                        }
                        {
                        monster.legendary_actions?.[3]?.desc
                        ? <p> {monster.legendary_actions[3].desc} 
                        <textarea
                        name='3'
                        style={{ 'width': 100 + '%', height: 100 + 'px' }}
                        type="text" 
                        placeholder="Legendary Actions?"
                        value={editState.legendary_actions[3].desc}
                        onChange={handleLegendaryActionsDesc}
                        className="mb-2"
                        /><br /></p>
                        : ''
                        }
                    </div>
                    <h3>Communal Visibility</h3>
                    <select onChange={handleVisibility} name="visibility" className="my-3">
                        <option value={editState.visibility} name="public">Select Preference</option>
                        <option value="public" name="public">Public</option>
                        <option value="private" name="private">Private</option>
                    </select> 
                </div> 
            </div>
            <button type="submit" className="btn btn-lg btn-outline-primary m-1">
                Homebrew!
            </button>
            <hr className="orange-border bottom" />
            </Form>
            </Col>
        
        
        {/* <SolaMonstra monster={monstroso} key={monstroso.index} isSaved={isSaved} /> */}
    </Row>
    );
}


