import React, { useState, useEffect } from "react";
import ApiMonsterData from "../ApiMonsterData/ApiMonsterData";
import Loading from "../Loading/Loading";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default function ApiMonsters({ user, handleLogout }) {

    const [monsterData, setMonsterData] = useState(null);
    // const [completedMonsterData, setCompletedMonsterData] = useState(false);
    const [monstahUrl, setMonstahUrl] = useState('');
    const [monsters, setMonsters] = useState([])
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    // let monster = [];

    const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/';
    

    // useCallback basically CACHES our fetchMonsters function, so it doesn't change between
    // re-renders of the comment. Const fetchMonsters = useCallback(async () => { }, [dependency: monsterData])
    // const makes it so it's not a 'new' function on re-render... Provided that the monsterData did not change
    // const fetchMonsters = useCallback(async () => {
    // const fetchMonsters = async () => {
    // useEffect(() => {
        async function fetchMonsters() {
            try {
                
                const response = await fetch(monsterUrl);
                console.log(response);
                if (response.ok) {
                const data = await response.json();
                console.log(data.results, '<- Monster Data!');
                setMonsterData(data.results)
                // setMonsterData(data.results);
                
                
                let monsterArr = [];
                // let monsterUrls = [];
                monsterArr = data.results;
                console.log(monsterArr, ' <- An Array of Monsters!')
                return monsterArr
                // console.log(monsterArr,'<- monsterArr Post Set State')
                // monsterArr.forEach((monster) => {
                //     const monstah = {
                //         key: monster.index,
                //         name: monster.name,
                //         index: monsterUrl+monster.index,
                //     }
                //     // console.log(monstah, '<- New Monstah to consume!')
                //     monsterUrls.push(monstah);  
                //     // console.log(monsterUrls, '<- The full array of Monstahs!')
                    
                // });
                
                    // setMonsterData(monsterUrls) // .then((res) => { console.log(res, '<-res embedded')})
                    // console.log(monsterUrls,'<- monsterUrls Post Set State')
                }
            } catch (err) {
                console.log(err, '<- Registered Error');
            }
        }

    // useEffect(async () => {
    //     await fetchMonsters()
    //     .then((result) => {
    //         console.log(result, '<- What result are you?')

    //     })
    // }, [monsterData])
    // fetchMonsters()
        // .then(
        //     monsterData.map((result) => {
        //     console.log(result, '<-What result are you?')
        // }))

    useEffect(() => {
        if (submitting) {
            fetchMonsters()
                .then(
                (response) => {
                setMonsterData(response)
                console.log(response, '<- The response in the submitting useEffect')
            });
            
            setSubmitting(false)
        }
    }, [submitting])

    async function handleSubmit(e) {
        setSubmitting(true);
        setLoading(true);
        e.preventDefault();
        try {
            const monstroso = await monstra();
            console.log(monstroso[0], ' <- Monstroso!')
            setMonsters(monstroso)
            setLoading(false);
        } catch (err)  {
            console.log(err.message, ' <- Error handling Monstroso!')
            setLoading(false);
        }

        // useEffect(() => {

        // }, [submitting])


        // fetchMonsters().then((response) => {
        //     console.log(response, '<- The response in the handlesubmit')
        //     setMonsters([...response])
            // setLoading(false)
            // console.log(response, '<- The response in the handlesubmit')
        }
    

    const monstra = async () => {
        await fetchMonsters()
            .then((result) => {
                console.log(result, '<- What result are you?')
                // setMonsters(result)
            })
    }

    // useEffect(() => {
    //     const getMonsterData = async () => {
    //         monsterData.map((monster) => {
    //             console.log(monster, '<- And what are you, stranger?')
    //             return (
    //                 <div>
    //                 <ApiMonsterData monster={monsterData} key={monster.index} getMonstahUrl={getMonstahUrl} />
    //                 </div>
    //             )
    //         })
    //     }
    //     getMonsterData();
    // }, [completedMonsterData])


    function getMonstahUrl(url) {
        setMonstahUrl(url);
    }

    if (loading) {
        return (
        <>
            {/* <Loading handleLogout={handleLogout} user={user} /> */}
            <Loading user={user} handleLogout={handleLogout} />
        </>
        );
    }


    return (
        <Container fluid>
            <Row>
                <Col>
            {
                monsterData 
                ? <Col> <ApiMonsterData monsters={monsterData} getMonstahUrl={getMonstahUrl} /> </Col>
                :
                <Col>
                <Row>
                    <Col md={{span: 4, offset: 4}} className="my-5">
                <Form onSubmit={handleSubmit} >
                <Button type="submit" className="btn btn-lg btn-danger">WARNING: This will grab ALL the monsters. Are you prepared?</Button>
                </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                <Carousel  activeIndex={index} id="carousel" onSelect={handleSelect} fade>
                    <Carousel.Item>
                    <img 
                        src={process.env.PUBLIC_URL + '/gifs/monster-button.gif'} 
                        alt="loading.gif" 
                        // style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} 
                        id="carousel-one"
                        className="d-block w-100"
                        // style={{alignSelf: 'center'}} 
                        
                    />
                        <Carousel.Caption>
                        <h3>Monster Search Form</h3>
                        <p>Type in the kind of parameter you wish to search, or just say gimme all!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img 
                        src={process.env.PUBLIC_URL + '/gifs/loading.gif'} 
                        alt="loading.gif" 
                        // style={{maxWidth: 50 + 'vw', height: 50 + 'vh'}} 
                        id="loading" 
                        className="d-block w-100"
                    />
                        <Carousel.Caption>
                        <h3>Loading Screen</h3>
                        <p>You shall experience a short intermission!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img 
                        src={process.env.PUBLIC_URL + '/gifs/loading.gif'} 
                        alt="loading.gif" 
                        // style={{maxWidth: 50 + 'vw', height: 50 + 'vh'}} 
                        id="loading"
                        className="d-block w-100" 
                    />
                        <Carousel.Caption>
                        <h3>Monster Retrieval</h3>
                        <p>
                            And voila! Hot, delicious monsters served right to you!
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
                </Row>
                </Col>
            }
                </Col>
            </Row>
        </Container>
    )
    
}