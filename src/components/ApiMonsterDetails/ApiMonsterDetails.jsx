import React, { useState, useEffect } from "react";
import './ApiMonsterDetails.css';
import { useParams } from 'react-router-dom';
import SolaMonstra from "../SolaMonstra/SolaMonstra";
import * as dndAPI from "../../utils/dndApi"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Loading from '../Loading/Loading'


export default function ApiMonsterDetails({ getmonstahurl, handleMonster }) {
    const [monstroso, setMonstroso] = useState({});
    const [monsterImage, setMonsterImage] = useState('');
    const [loading, setLoading] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [apiMonster, setApiMonster] = useState(true)
    const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'

    const { monsterName } = useParams();

    useEffect(() => {
        backendMonster()
    }, [])

    async function backendMonster() {
        const monster = monsterName;
        console.log(monster, '<- THe monster name')
        setLoading(true);
        try {
            const response = await dndAPI.target(monster)
            console.log(response, '<- Response in Backend Endmonster')
            setMonstroso(response.response)
            setLoading(false);
        } catch (err) {
            console.log(err.message, '<- Error in Backend Monster!')
            setLoading(false);
        }
    }

    // useEffect(() => {
    //     const url = `${monsterUrl}${monsterName}`;

    //     // TODO: Put API in Backend
    //     // FIXME: Put API in Backend

    //     async function fetchUrls() {
    //         getmonstahurl(monsterName);
    //         console.log(monsterName, '<- Monster Data in Monster Detail')
    //         try {
    //             const res = await fetch(url);
    //                 console.log(res);
    //                 if (res.ok) {
    //                     const newData = await res.json();
    //                     console.log(newData, '<- What on earth are you?');
    //                     console.log(newData.index, '<-Can I use you?')
    //                     let monSrc = ''; 
    //                     monSrc = '/images/' + newData.index + '.png';
    //                     console.log(monSrc, '<-Hopefully the image src')
    //                     setMonsterImage(monSrc);
    //                     setMonstroso(newData);
    //                     console.log(monstroso, '<- the monstroso in question?')
    //                 }
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchUrls();
    // }, []);

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchUrls() {
            console.log(monsterName, '<- Monster Data in Monster Detail')
            try {
                const formData = new FormData();
                let required = ['special_abilities', 'proficiencies', 'damage_vulnerabilities', 'damage_resistances',  'damage_immunities', 'condition_immunities', 'actions', 'senses', 'legendary_actions', 'speed', 'index', 'name', 'size', 'type', 'alignment', 'armor_class', 'hit_points', 'hit_dice', 'hit_points_roll', 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'languages', 'challenge_rating', 'xp']
                for (let key in monstroso) {
                    if (required.includes(key)) {
                        formData[key] = monstroso[key]
                    }
                }
                        console.log(
                            formData.forEach((item) => console.log(item)),
                            '<- The current spec of formData');
                            handleMonster(formData); 
                            setIsSaved(true);
            } catch (err) {
                console.log(err);
            }
        }
        fetchUrls();
    }

    if (loading) {
        return (
        <>
            <Loading />
        </>
        );
    }
    
    return (
    <div>
        <Col md={{span: 6, offset: 5}} className="my-5">
        {/* {
            isSaved
            ? <button value={monstroso} type="submit" className="btn btn-danger my-3" disabled>
            {monstroso.name} Is Yours Now!
            </button>
            : <Form onSubmit={handleSubmit}>
            <button value={monstroso} type="submit" className="btn btn-success my-3">
            Add {monstroso.name} ?
            </button>
        </Form>
        } */}
        </Col>
        <SolaMonstra monster={monstroso} key={monstroso.index} handleSubmit={handleSubmit} apiMonster={apiMonster} isSaved={isSaved} />
        <Col className="my-5"></Col>
    </div>
    );
}


