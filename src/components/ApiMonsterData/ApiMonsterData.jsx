import React, { useState } from 'react';
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
    const [allMonsters, setAllMonsters] = useState([]);
    function getMonstahUrl(url) {
        setMonstahUrl(url);
    }

    async function filterMonsters(results) {
        console.log(results, '<- Results in filterMonsters')
        let finalResults = [];
            for (let i = 0; i < results.length; i++){
                if (finalResults.length < 150) {
                    // await monsters.get(results[i].url)
                    // .then((response) => {
                        finalResults.push(results[i])
                    // }).catch((err) => {
                    
                    // })
                }        
        }
        setAllMonsters(finalResults)
    }   

    function displayResults() {
        let views = [];
        for (let i = 0; i < allMonsters.length; i++) {
            views.push(
                <div className="results" >
                    {/* <Link monsters={allMonsters[i]}/> */}
            {/* <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}>
                <Col> */}
                
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
                        getMonstahUrl={getMonstahUrl} 
                        className="btn btn-danger btn-lg p-2 my-1">
                        {allMonsters[i].name}
                    </Link>
                    </Card>
                    
                {/* </Col>
            </Row> */}
                    
                    
                </div>
            )
        }
        return (views)
    }

    function handleChange(event) {
        event.preventDefault()
        setSearchText(event.target.value.toLowerCase());
        
        setAllMonsters([]);
        if (searchText == '') {
            setAllMonsters([]);
            return
        }

        const filteredResults = monsters.filter(m => m['name'].includes(searchText))        
        filterMonsters(filteredResults)
        console.log(searchText, '<- the changing search text')
        return filteredResults
    }

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


    return (
        <React.Fragment>
        <Row>
        <Form className="searchForm" >
        <Col md={{span: 8, offset: 2}} >
            <h2 >Type Any Part of the Monster's Name!</h2>
        </Col>
        <Col md={{span: 4, offset: 4}}>
        <input className="headerSearchInput" placeholder="Type Here!" type="text" value={searchText} onChange={handleChange} />
        {/* <input type="submit" value="Search"></input> */}
        </Col>
        </Form>
        </Row>
        <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}>
        <Col >
                {   
                    monsters.length > 0 
                    ? <div>
                        <h1>Results for {searchText}: </h1>
                        <div className="resultsContainer"> 
                            {displayResults()} 
                        </div>
                    </div> 
                    : <h3>Monsters Not Found</h3>    
                }
        </Col>
        <Col >
        {monsters.map((monster) => {
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
        })} 
        </Col>
        </Row>
        </React.Fragment>
    )
}