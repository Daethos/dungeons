import './UserProfile.css';
import React, { useEffect, useState } from 'react';
import MonsterCard from '../../components/MonsterCard/MonsterCard';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import * as monstersAPI from '../../utils/monsterApi';
import UserMonsters from '../../components/UserMonsters/UserMonsters';
// import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';


export default function UserProfile({ loggedUser, handleLogout, setUser, monstra, setMonstra }) {
    const [monsters, setMonsters] = useState([]);
    // const [error, setError] = useState('');
    const [searchText, setSearchText] = useState('');
    const [allMonsters, setAllMonsters] = useState(monsters);

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
                    <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} className="p-1 my-3" bg="danger">
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
                    </Card>
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
        async function getMonsters() {
            try {
                const response = await monstersAPI.getAll();
                console.log(response, ' <- the response in getMonsters')
                setMonstra([...response.data])
                setMonsters([...response.data])
            } catch (err) {
                console.log(err.message);
            }
        }
        getMonsters()
    }, [])
    
    

    return (
        <div>
            <input className="headerSearchInput" placeholder="Type Here!" type="text" value={searchText} onChange={handleChange} />
            {/* <NavBar user={loggedUser} setUser={setUser} handleLogout={handleLogout} /> */}
            {/* <img src={process.env.PUBLIC_URL + '/images/dungeon-background.png'} className="overlay" alt="ancient-black-dragon" id="background" /> */}
            {/* <div className="overlay" style={{background: process.env.PUBLIC_URL + '/images/dungeon-background.png'}} /> */}
            
            {   
                monsters.length > 0 
                ? <>
                        {displayResults()} 
                </>
                : <h3>Monsters Not Found</h3>    
            }
            
            
            <MonsterCard monsters={monsters} />
            
        </div>
    );
}

// I want to follow the logic of Jim's work with the PostCards and make a component for MonsterCards, probably on
// Fresh go-round of concept in p4
