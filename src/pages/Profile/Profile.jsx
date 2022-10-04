import './Profile.css';
import React, { useEffect, useState, useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import userService from "../../utils/userService";
import SolaMonstra from '../../components/SolaMonstra/SolaMonstra';
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";


export default function ProfilePage({ user, handleLogout }) {
    const [monsters, setMonsters] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [allMonsters, setAllMonsters] = useState(monsters);
    const BUCKET_START = 'https://collectionbucketman.s3.amazonaws.com/dungeons/';


    const [profileUser, setProfileUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const { username } = useParams();

    const getProfile = useCallback(async () => {
        try {
        const response = await userService.getProfile(username);
        setLoading(false);
        setProfileUser(response.data.user);
        setMonsters(response.data.monsters);
        console.log(response);
        } catch (err) {
        console.log(err.message);
        setError("Profile does not exist! You are in the wrong in place"); 
        }
    }, [username]);

    useEffect(() => {
        getProfile();
    }, [username, getProfile]);

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


    if (loading) {
        return (
            <Loading user={user} handleLogout={handleLogout} />
        );
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
                    <SolaMonstra
                        monster={allMonsters[i]}
                        key={allMonsters[i]._id}
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

    return (
        <div>
            <Row 
                className="justify-content-center" 
                xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}
            >
            <Col className="stat-block wide">
            <hr className="orange-border" />
            
            <div className="section-left">
                <div className="creature-heading">
                <svg height="5" width="100%" className="tapered-rule my-3">
                <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
                <img src={profileUser.photoUrl} id="profile-pic" />
                    <h1></h1>
                    <h2></h2>
                </div> 
                <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
                </svg>
            
                
                </div> 
                <div className="section-right">
                    <div className="actions">
                        <h3>{profileUser.username}</h3>
                        <div className="property-block">
                        <h4 className="m-4">{profileUser.bio}</h4>
                        </div> 
                        
                    </div> 
                </div>
                <hr className="orange-border bottom" />
            
            </Col>
            </Row>
            
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
                    />
                )
            })}
        </div>
    );
}