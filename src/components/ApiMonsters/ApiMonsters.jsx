import React, { useState, useEffect, useCallback } from "react";
import ApiMonsterData from "../ApiMonsterData/ApiMonsterData";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ApiMonsters({ user, handleLogout }) {

    const [monsterData, setMonsterData] = useState(null);
    const [completedMonsterData, setCompletedMonsterData] = useState(false);
    const [monstahUrl, setMonstahUrl] = useState('');
    const [monsters, setMonsters] = useState([])
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    let monster = [];

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
        <div className="border border-black">
            {monsterData ? <ApiMonsterData monsters={monsterData} getMonstahUrl={getMonstahUrl} /> : ''}
            <form onSubmit={handleSubmit}>
            <Button type="submit" className="btn btn-lg btn-danger">WARNING: This will grab ALL the monsters. Are you prepared?</Button>
            </form>
        </div>
    )
    
}