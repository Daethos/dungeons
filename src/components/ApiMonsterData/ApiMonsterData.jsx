import React, { useState, useEffect } from 'react';
import './ApiMonsterData.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ApiMonsterData({ monsters }) {
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
                

                <Col className="results">
                <div className="stat-block wide">
                <hr className="orange-border" />
                <div className="section-left">
                    <div className="creature-heading">
                        <h1>{allMonsters[i].name}</h1>
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                    <Link 
                            to={'/Monsters/' + allMonsters[i].index}
                            key={allMonsters[i].index}
                            monstah={allMonsters[i]}
                        >
                    <img 
                        src={process.env.PUBLIC_URL + '/images/' + allMonsters[i].index + '.jpg'} 
                        alt={allMonsters[i].name} 
                        // id="monster-card-image" 
                        style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}}
                    />
                    </Link>
                </div> 

                <hr className="orange-border bottom" />
                </div>
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

    const fullMonsters = monsters.map((monster) => {
        return (

            <React.Fragment>
                <Col>
                <div className="stat-block wide">
                <hr className="orange-border" />
                <div className="section-left">
                    <div className="creature-heading">
                        <h1>{monster.name}</h1>
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                    <Link 
                            to={'/Monsters/' + monster.index}
                            key={monster.name}
                            monstah={monster}
                        >
                    <img 
                        src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'} 
                        alt={monster.name} 
                        // id="monster-card-image" 
                        style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}}
                    />
                    </Link>
                </div> 
                
                <hr className="orange-border bottom" />
                </div>
                </Col>
            </React.Fragment>
            );
    }) 


    return (
        <React.Fragment>
        <Row>
        <Form className="searchForm" >
        <Col md={{offset: 4}} className="my-5" >
            <h1>Search for any Monster*! From the SRD</h1>
        </Col>
        <Col md={{}} className="my-5" >

            <InputGroup className="bg-black">
                <InputGroup.Text className="bg-black">
                <img 
                        src={process.env.PUBLIC_URL + '/images/awakened-shrub.png'} 
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
        <Col md={{span: 8, offset: 5}} className="my-5" >
            <h1>Results for {searchText}: {allMonsters.length} </h1>
        {/* <input type="submit" value="Search"></input> */}
        </Col>
        </Form>
        </Row>
        {/* <Row 
            className="justify-content-md-center" 
            style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} 
            xs={3 | 'auto'} sm={4 | 'auto'} md={5 | 'auto'} lg={6 | 'auto'} xl={6 | 'auto'} xxl={6 | 'auto'}
        > */}
            <Row>
        
                {   
                    monsters.length > 0 
                    ? <>
                            {displayResults()} 
                    </>
                    : <h3>Monsters Not Found</h3>    
                }
        
        </Row>
        <Row >
        {fullMonsters}
        
        </Row>
        </React.Fragment>
    )
}