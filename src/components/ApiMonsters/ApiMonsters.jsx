import React, { useState, useEffect } from "react";
import ApiMonsterData from "../ApiMonsterData/ApiMonsterData";
import * as dndAPI from '../../utils/dndApi'
import Loading from "../Loading/Loading";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ApiMonsters({ user, handleLogout }) {

    const [monsterData, setMonsterData] = useState(null);
    const [monsters, setMonsters] = useState([])
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/';
        async function fetchMonsters() {
            try {
                const response = await fetch(monsterUrl);
                console.log(response);
                if (response.ok) {
                const data = await response.json();
                console.log(data.results, '<- Monster Data!');
                setMonsterData(data.results)
                let monsterArr = [];
                monsterArr = data.results;
                console.log(monsterArr, ' <- An Array of Monsters!')
                return monsterArr
                }
            } catch (err) {
                console.log(err, '<- Registered Error');
            }
        }

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault();
        try {
            const monstroso = await monstra();
            
            setMonsters(monstroso)
            setLoading(false);
        } catch (err)  {
            console.log(err.message, ' <- Error handling Monstroso!')
            setLoading(false);
        }
    }

    async function handleSubmitting(e) {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await dndAPI.index()
            console.log(response.response.results, ' <-  What data came back to react? ')
            setMonsterData(response.response.results)
            setLoading(false);
        } catch (err) {
            console.log(err.message, '<- Error in new API Call')
            setLoading(false);
        }
    }
    
    useEffect(() => {
        backendMonster()
    }, [])

    async function backendMonster() {
        setLoading(true);
        try {
            const response = await dndAPI.index()
            setMonsterData(response.response.results)
            setLoading(false);
        } catch (err) {
            console.log(err.message, '<- Error in Backend Monster!')
            setLoading(false);
        }
    }
    
    const monstra = async () => {
        await fetchMonsters()
            .then((result) => {
                console.log(result, '<- What result are you?')
            })
    }

    if (loading) {
        return (
        <>
            <Loading user={user} handleLogout={handleLogout} />
        </>
        );
    }

    return (
        <Container fluid>
            {
            monsterData 
            ? 
            <ApiMonsterData monsters={monsterData} 
            key=
            {
                monsterData.map((m) => {
                    return (
                        m.index
                    )
                })
            } 
            />

        
            :
            <React.Fragment>
            <Row>
                <Col md={{span: 4, offset: 4}} className="my-5">
            <Form onSubmit={handleSubmit} >
            <Button type="submit" className="btn btn-lg btn-danger my-5">WARNING: This will grab ALL the monsters. Are you prepared?</Button>
            </Form>
            <Form onSubmit={handleSubmitting} >
            <Button type="submit" className="btn btn-lg btn-danger">WARNING: This uses the backend ^_^</Button>
            </Form>
                </Col>
            </Row>
            </React.Fragment>
            }
        </Container>
    )
    
}