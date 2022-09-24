import './UserMonsters.css';
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function UserMonsters({ monsters }) {
    // const [userCharactersState, setUserCharactersState] = useState(null);

    let monstra = monsters.map((mon) => {
        return (
            
                <Col className="card col-2 my-5" style={{maxWidth: 50 + 'vw'}} id="user-monsters">
                <img src={process.env.PUBLIC_URL + '/images/' + mon.index + '.jpg'} key={mon.index} alt={mon.name} style={{maxWidth: 30 + 'vw', height: 30 + 'vh'}} id="monster-image" />
                <div className="card-body bg-warning">
                <h3 className="card-title">{mon.name}</h3>
                <div className="card-text">
                <h5>{mon.size}</h5>
                <h5>{mon.type}</h5>
                <h5>Hit Points: {mon.hit_points}</h5>
                <h5>Hit Dice: {mon.hit_dice}</h5>
                <h5>Hit Points Roll: {mon.hit_points_roll}</h5>
                <h5>Armor Class: {mon.armor_class}</h5>
                <h5>Challenge Rating: {mon.challenge_rating}</h5>
                <h5>Languages: {mon.languages}</h5>
                {
                mon.speed
                ? <h5>Speed (Burrow): {
                    mon.speed.burrow
                    ? mon.speed.burrow
                    : 'No Relevant Information'
                }</h5>
                : <h5>''</h5>
                }
                {
                mon.speed
                ? <h5>Speed (Climb): {
                    mon.speed.climb
                    ? mon.speed.climb
                    : 'No Relevant Information'
                }</h5>
                : <h5>''</h5>
                }
                {
                mon.speed
                ? <h5>Speed (Flight): {
                    mon.speed.fly
                    ? mon.speed.fly
                    : 'No Relevant Information'
                }</h5>
                : <h5>''</h5>
                }
                {
                mon.speed 
                ? <h5>Speed (Swim): {
                    mon.speed.swim
                    ? mon.speed.swim
                    : 'No Relevant Information'
                    }</h5>
                : <h5>''</h5>
                }
                {
                mon.speed 
                ? <h5>Speed (Walk): {
                    mon.speed.walk
                    ? mon.speed.walk
                    : 'No Relevant Information'
                    }</h5>
                : <h5>''</h5>
                }
                <h5>Attributes</h5>
                <h5>Strength: {mon.strength}</h5>
                <h5>Dexterity: {mon.dexterity}</h5>
                <h5>Constitution: {mon.constitution}</h5>
                <h5>Intelligence: {mon.intelligence}</h5>
                <h5>Wisdom: {mon.wisdom}</h5>
                <h5>Charisma: {mon.charisma}</h5>
                {/* {
                mon.actions
                ? <h2> {
                    mon.actions[0]
                    ? 'Actions (1): ' + mon.actions[0].name + ' - ' + mon.actions[0].desc
                    : ''
                }</h2>
                : <h2>Actions (1): Error</h2>
                }
                {
                mon.actions
                ? <h2> {
                    mon.actions[1]
                    ? 'Actions (2): ' + mon.actions[1].name + ' - ' + mon.actions[1].desc
                    : ''
                }</h2>
                : <h2>Actions (2): Error</h2>
                }
                {
                mon.actions
                ? <h2> {
                    mon.actions[2]
                    ? 'Actions (3): ' + mon.actions[2].name + ' - ' + mon.actions[2].desc
                    : ''
                }</h2>
                : <h2>Actions (3): Error</h2>
                }
                {
                mon.actions
                ? <h2> {
                    mon.actions[3]
                    ? 'Actions (4): ' + mon.actions[3].name + ' - ' + mon.actions[3].desc
                    : ''
                }</h2>
                : <h2>Actions (4): Error</h2>
                }
                {
                mon.legendary_actions
                ? <h2> {
                    mon.legendary_actions[0]
                    ? 'Legendary Action (1): ' + mon.legendary_actions[0].one.name + ' - ' + mon.legendary_actions[0].one.desc
                    : ''
                }</h2>
                : <h2>legendary_actions (1): Error</h2>
                }
                {
                mon.legendary_actions
                ? <h2> {
                    mon.legendary_actions[0]
                    ? 'Legendary Action (2): ' + mon.legendary_actions[0].two.name + ' - ' + mon.legendary_actions[0].two.desc
                    : ''
                }</h2>
                : <h2>legendary_actions (2): Error</h2>
                }
                {
                mon.legendary_actions
                ? <h2> {
                    mon.legendary_actions[0]
                    ? 'Legendary Action (3): ' + mon.legendary_actions[0].three.name + ' - ' + mon.legendary_actions[0].three.desc
                    : ''
                }</h2>
                : <h2>legendary_actions (3): Error</h2>
                } */}
                </div>
                </div>
                </Col>
        )
    })

    return (
        <Row>
            
                {/* <div className="card bg-black col-1 offset-1 my-5" style={{width: 30 + 'vw'}}> */}
                    {monstra}
                {/* </div> */}
            
        </Row>
    );
}
