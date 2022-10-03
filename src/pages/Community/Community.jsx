import './Community.css';
import React, { useEffect, useState } from 'react';
import MonsterCard from '../../components/MonsterCard/MonsterCard';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as monstersAPI from '../../utils/monsterApi';
import * as communityAPI from '../../utils/communityApi'
import UserMonsters from '../../components/UserMonsters/UserMonsters';
// import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import SolaMonstra from '../../components/SolaMonstra/SolaMonstra';
import EditMonster from '../../components/EditMonster/EditMonster';


export default function Community({ loggedUser, handleLogout, setUser }) {
    const [monsters, setMonsters] = useState([]);
    // const [error, setError] = useState('');
    const [searchText, setSearchText] = useState('');
    const [allMonsters, setAllMonsters] = useState(monsters);
    const [isSaved, setIsSaved] = useState(true)
    const [inCommunity, setInCommunity] = useState(true)
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
                    <SolaMonstra
                        monster={allMonsters[i]}
                        key={allMonsters[i]._id}
                        inCommunity={inCommunity}
                    />
                </Col>
            )
        }
        return (views)
    }


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
            const response = await communityAPI.getEveryone();
            console.log(response, ' <- the response in getMonsters')
            
            setMonsters([...response.data].reverse())
        } catch (err) {
            console.log(err.message);
        }
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
                        isSaved={isSaved}
                        inCommunity={inCommunity}
                        user={setUser}
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