import React, { useState, useEffect } from 'react';
import './ApiMonsterData.css'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ApiMonsterData({ monsters }) {
    const [searchText, setSearchText] = useState('');
    const [allMonsters, setAllMonsters] = useState(monsters);
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
                // <Col className="results">
                <>
                <Col className="stat-block wide">
                <hr className="orange-border" />
                <div className="section-left">
                    <div className="creature-heading">
                        <h1>{allMonsters[i].name}</h1>
                    </div> 
                    <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                    <Link to={'/Monsters/' + allMonsters[i].index}
                            key={allMonsters[i].index}
                            monstah={allMonsters[i]}>
                    <img 
                        src={BUCKET_START + allMonsters[i].index + '.png'} 
                        alt={allMonsters[i].name}
                        style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}} 
                        // style={{maxWidth: 100 + '%'}}
                    />
                    </Link>
                </div> 
                <hr className="orange-border bottom" />
                </Col>
                
                </>
                // </Col>
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
        if (searchText === '') {
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
                <Col className="stat-block wide">
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
                        key={monster.index}
                        monstah={monster}
                    >
                    <img 
                        src={BUCKET_START + monster.index + '.png'} 
                        alt={monster.name} 
                        style={{maxWidth: 100 + '%', maxHeight: 75 + '%'}}
                    />
                    </Link>
                </div> 
                <hr className="orange-border bottom" />
                </Col>
            );
    }) 

    return (
        <React.Fragment>
        <Row>
        <Form className="searchForm" >
        <Col md={{span: 4, offset: 4}} style={{ 'textAlign': 'center' }} className="my-5" >
            <h1 bg="black" className="text-warning bg-black p-3" style={{ 'borderRadius': 10 + 'px' }}>Search For Any Monster</h1>
        </Col>
        <Col md={{}} className="my-5" >

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
                    placeholder="What Monster are you looking for? Perhaps an Elemental, or a Giant?" 
                    type="text" value={searchText} 
                    onChange={handleChange}
                />
            </InputGroup>
        </Col>
        <Col md={{span: 4, offset: 4}} className="my-5" >
            <h1 bg="black" className="text-warning bg-black p-3" style={{ 'borderRadius': 10 + 'px' }}>Results for {searchText}: {allMonsters.length} </h1>
        </Col>
        </Form>
        </Row>
            <Row className="justify-content-center"
            //xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={3 | 'auto'} xl={3 | 'auto'} xxl={4 | 'auto'}
             >
                {   
                    monsters.length > 0 
                    ? <>{displayResults()}</>
                    : <h3>Monsters Not Found</h3>    
                }
        </Row>
        <Row className="justify-content-center"
        // xs={1 | 'auto'} sm={1 | 'auto'} md={1 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}
        >
            
        {fullMonsters}
        
        </Row>
        </React.Fragment>
    )
}