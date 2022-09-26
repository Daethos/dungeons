import React, { useState, useEffect } from 'react';
import MonsterCard from '../MonsterCard/MonsterCard';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import ApiMonsterDetails from '../ApiMonsterDetails/ApiMonsterDetails';

export default function ApiMonsterData({ monsters }) {
    const [monstahUrl, setMonstahUrl] = useState('');
    const [searchText, setSearchText] = useState('');
    const [error, setError] = useState(null);
    const [allMonsters, setAllMonsters] = useState(monsters);
    function getMonstahUrl(url) {
        setMonstahUrl(url);
    }

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

    // function handleSubmit(event) {
    //     event.preventDefault()      
    //     setAllMonsters([]);
    //     if (searchText == '') {
    //         setAllMonsters([]);
    //         return
    //     }

    //     const filteredResults = monsters.filter(m => m['index'].includes(searchText)) 
    //     console.log(filteredResults, '<- The filtered results')       
    //     filterMonsters(filteredResults)
    //     return filteredResults
        
    // }

    const fullMonsters = monsters.map((monster) => {
        return (
            <Col>
            <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} className="p-1 my-3" bg="danger">
                <Card.Img 
                    src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'} 
                    alt={monster.name} 
                    id="monster-search-card" />
                <Link 
                    to={"/Monsters/" + monster.index} 
                    key={monster.index} 
                    monstah={monster}
                    getMonstahUrl={getMonstahUrl} 
                    className="btn btn-danger btn-lg p-2 my-1">
                    {monster.name}
                </Link>
                </Card>
                </Col>
            );
    }) 


    return (
        <React.Fragment>
        <Row>
        <Form className="searchForm" >
        <Col md={{span: 8, offset: 4}} className="my-5" >
            <h1>Type Any Part of the Monster's Name!</h1>
        <input className="headerSearchInput" placeholder="Type Here!" type="text" value={searchText} onChange={handleChange} />
        <h1>Results for {searchText}: {allMonsters.length} </h1>
        {/* <input type="submit" value="Search"></input> */}
        </Col>
        </Form>
        </Row>
        <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={3 | 'auto'} sm={4 | 'auto'} md={5 | 'auto'} lg={6 | 'auto'} xl={6 | 'auto'} xxl={6 | 'auto'}>
                {   
                    monsters.length > 0 
                    ? <>
                            {displayResults()} 
                    </>
                    : <h3>Monsters Not Found</h3>    
                }
        {/* {monsters.map((monster) => {
            return (
                <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} className="p-1 my-3" bg="danger">
                    <Card.Img 
                        src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'} 
                        alt={monster.name} 
                        id="monster-search-card" />
                    <Link 
                        to={"/Monsters/" + monster.index} 
                        key={monster.index} 
                        monstah={monster}
                        getMonstahUrl={getMonstahUrl} 
                        className="btn btn-danger btn-lg p-2 my-1">
                        {monster.name}
                    </Link>
                    </Card>
                
                );
        })}  */}
        {fullMonsters}
        
        </Row>
        </React.Fragment>
    )
}