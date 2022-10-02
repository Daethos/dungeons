import './UserProfile.css';
import React, { useEffect, useState } from 'react';
import MonsterCard from '../../components/MonsterCard/MonsterCard';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as monstersAPI from '../../utils/monsterApi';
import UserMonsters from '../../components/UserMonsters/UserMonsters';
// import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import SolaMonstra from '../../components/SolaMonstra/SolaMonstra';
import EditMonster from '../../components/EditMonster/EditMonster';


export default function UserProfile({ loggedUser, handleLogout, setUser }) {
    const [monsters, setMonsters] = useState([]);
    // const [error, setError] = useState('');
    const [searchText, setSearchText] = useState('');
    const [allMonsters, setAllMonsters] = useState(monsters);
    const [isSaved, setIsSaved] = useState(true)
    const [onProfile, setOnProfile] = useState(true)
    const BUCKET_START = 'https://collectionbucketman.s3.amazonaws.com/dungeons/';

    async function filterMonsters(results) {
        console.log(results, '<- Results in filterMonsters')
        console.log(results.length, '<- The amount of search results!')
        let finalResults = [];
            for (let i = 0; i < results.length; i++){
                if (finalResults.length < monsters.length) {
                        finalResults.push(results[i])
                }        
        }
        setAllMonsters(finalResults)
    }

    function displayResults() {
        let views = [];
        for (let i = 0; i < allMonsters.length; i++) {
            views.push(
                
                <Col className="results" >
                    {/* <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} className="p-1 my-3" bg="danger">
                    <Card.Img 
                        src={process.env.PUBLIC_URL + '/images/' + allMonsters[i].index + '.jpg'} 
                        // key={allMonsters[i].index} 
                        alt={allMonsters[i].name} 
                        id="monster-search-card" />
                    <Link 
                        to={"/Monsters/" + allMonsters[i].index} 
                        key={allMonsters[i].index} 
                        monstah={allMonsters[i]}
                        
                        className="btn btn-danger btn-lg p-2 my-1">
                        {allMonsters[i].name}
                    </Link>
                    </Card> */}
                    <SolaMonstra
                        monster={allMonsters[i]}
                        key={allMonsters[i]._id}
                        deleteMonster={deleteMonster}
                        isSaved={true}
                    />
                </Col>
            )
        }
        return (views)
    }

    // function displayResults() {
    //     const views = allMonsters.map((m) {
    //         return (
    //             <UserMonsters monsters={allMonsters[i]} key={allMonsters[i].name} loggedUser={loggedUser} />
    //         )
    //     })
    // }

    function handleChange(event) {
        event.preventDefault()
        setSearchText(event.target.value.toLowerCase().split(' ').join('-'));
    }

    useEffect(() => {
        setAllMonsters([]);
        if (searchText == '') {
            setAllMonsters([]);
            return
        }

        const filteredResults = monsters.filter(m => m['index'].includes(searchText))        
        filterMonsters(filteredResults)
        console.log(searchText, '<- the changing search text')
        return filteredResults
    }, [searchText, monsters])

    useEffect(() => {
        getMonsters()
    }, [])

    async function getMonsters() {
        try {
            const response = await monstersAPI.getAll();
            console.log(response, ' <- the response in getMonsters')
            
            setMonsters([...response.data].reverse())
        } catch (err) {
            console.log(err.message);
        }
    }

    async function deleteMonster(monster) {
        monster.preventDefault();
        console.log(monster.target.value, '<- What are you in here?')
        monstersAPI.deleteMonster(monster.target.value)
        // setMonsterState({ monsters })
        getMonsters()
    }

    async function editMonster(monster) {
        monster.preventDefault();
        console.log(monster.target.value, '<- What are you in here?')
        monstersAPI.deleteMonster(monster.target.value)
        // setMonsterState({ monsters })
        getMonsters()
    }

    return (
        <div>
            {/* <input className="headerSearchInput" placeholder="Type Here!" type="text" value={searchText} onChange={handleChange} /> */}
            <Col md={{span: 8, offset: 2}} className="my-5">
            <InputGroup className="bg-black">
                <InputGroup.Text className="bg-black">
                <img 
                        src={BUCKET_START + 'awakened-shrub.png'} 
                        alt="Awakened Shrub" 
                        style={{maxWidth: 5 + 'vw', maxHeight: 5 + 'vh'}}
                    />
                </InputGroup.Text>
                <Form.Control 
                    className="headerSearchInput bg-black text-white" 
                    placeholder="What Monster are you looking for?" 
                    type="text" value={searchText} 
                    onChange={handleChange}
                />
            </InputGroup>
            </Col>
            {   
                monsters.length > 0 
                ? <>
                        {displayResults()} 
                </>
                : ''   
            }
            {monsters.map((monster) => {
                return (
                    <SolaMonstra
                        monster={monster}
                        key={monster._id}
                        deleteMonster={deleteMonster}
                        editMonster={editMonster}
                        isSaved={isSaved}
                        onProfile={onProfile}
                    />
                )
            })}
            {/* <MonsterCard monsters={monsters} deleteMonster={deleteMonster} /> */}
        </div>
    );
}

// I want to follow the logic of Jim's work with the PostCards and make a component for 
// MonsterCards, probably on
// Fresh go-round of concept in p4
// I did it !!