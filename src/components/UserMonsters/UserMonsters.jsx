import './UserMonsters.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function UserMonsters({ monsters }) {
    // const [userCharactersState, setUserCharactersState] = useState(null);
    // style={{maxWidth: 50 + 'vw'}}
    //  style={{maxWidth: 25 + 'vw'}}
    // style={{maxWidth: 100 + 'vw', height: 100 + 'vh'}}
    let monstra = monsters.map((mon) => {
        return (
            <Col className="my-3" id="user-monsters" >
            <Card style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} className="p-1" bg="danger" id="user-monster-card">
                <Card.Img src={process.env.PUBLIC_URL + '/images/' + mon.index + '.jpg'} key={mon.index} alt={mon.name} id="monster-image" />
                <Card.Body style={{ backgroundImage: 'url(/images/dungeon-background.png)' }}>
                    <Card.Title>{mon.name}</Card.Title>
                    <Card.Text>
                    <Card.Subtitle>{mon.size} {mon.type}</Card.Subtitle>
                    <br />
                    Hit Points: {mon.hit_points}
                    <br />
                    Hit Dice: {mon.hit_dice}
                    <br />
                    Hit Points Roll: {mon.hit_points_roll}
                    <br />
                    Armor Class: {mon.armor_class}
                    <br />
                    Challenge Rating: {mon.challenge_rating}
                    <br />
                    Languages: {mon.languages}
                    <br />
                    {
                    mon.speed
                    ? <>Speed (Burrow): {
                        mon.speed.burrow
                        ? mon.speed.burrow
                        : 'No Info'
                    }</>
                    : ''
                    }
                    <br />
                    {
                    mon.speed
                    ? <>Speed (Climb): {
                        mon.speed.climb
                        ? mon.speed.climb
                        : 'No Info'
                    }</>
                    : ''
                    }
                    <br />
                    {
                    mon.speed
                    ? <>Speed (Flight): {
                        mon.speed.fly
                        ? mon.speed.fly
                        : 'No Info'
                    }</>
                    : ''
                    }
                    <br />
                    {
                    mon.speed 
                    ? <>Speed (Swim): {
                        mon.speed.swim
                        ? mon.speed.swim
                        : 'No Info'
                        }</>
                    : ''
                    }
                    <br />
                    {
                    mon.speed 
                    ? <>Speed (Walk): {
                        mon.speed.walk
                        ? mon.speed.walk
                        : 'No Info'
                        }</>
                    : ''
                    }
                    <br />
                    Strength: {mon.strength}
                    <br />
                    Dexterity: {mon.dexterity}
                    <br />
                    Constitution: {mon.constitution}
                    <br />
                    Intelligence: {mon.intelligence}
                    <br />
                    Wisdom: {mon.wisdom}
                    <br />
                    Charisma: {mon.charisma}
                    {/* {
                    mon.actions
                    ? <> {
                        mon.actions[0]
                        ? 'Actions (1): ' + mon.actions[0].name + ' - ' + mon.actions[0].desc
                        : ''
                    }</>
                    : <>Actions (1): Error</>
                    }
                    {
                    mon.actions
                    ? <> {
                        mon.actions[1]
                        ? 'Actions (2): ' + mon.actions[1].name + ' - ' + mon.actions[1].desc
                        : ''
                    }</>
                    : <>Actions (2): Error</>
                    }
                    {
                    mon.actions
                    ? <> {
                        mon.actions[2]
                        ? 'Actions (3): ' + mon.actions[2].name + ' - ' + mon.actions[2].desc
                        : ''
                    }</>
                    : <>Actions (3): Error</>
                    }
                    {
                    mon.actions
                    ? <> {
                        mon.actions[3]
                        ? 'Actions (4): ' + mon.actions[3].name + ' - ' + mon.actions[3].desc
                        : ''
                    }</>
                    : <>Actions (4): Error</>
                    }
                    {
                    mon.legendary_actions
                    ? <> {
                        mon.legendary_actions[0]
                        ? 'Legendary Action (1): ' + mon.legendary_actions[0].one.name + ' - ' + mon.legendary_actions[0].one.desc
                        : ''
                    }</>
                    : <>legendary_actions (1): Error</>
                    }
                    {
                    mon.legendary_actions
                    ? <> {
                        mon.legendary_actions[0]
                        ? 'Legendary Action (2): ' + mon.legendary_actions[0].two.name + ' - ' + mon.legendary_actions[0].two.desc
                        : ''
                    }</>
                    : <>legendary_actions (2): Error</>
                    }
                    {
                    mon.legendary_actions
                    ? <> {
                        mon.legendary_actions[0]
                        ? 'Legendary Action (3): ' + mon.legendary_actions[0].three.name + ' - ' + mon.legendary_actions[0].three.desc
                        : ''
                    }</>
                    : <>legendary_actions (3): Error</>
                    } */}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        )
    })

    return (
        <React.Fragment>
            <Row className="justify-content-md-center" style={{maxWidth: 100 + 'vw', maxHeight: 100 + 'vh'}} xs={1 | 'auto'} sm={1 | 'auto'} md={2 | 'auto'} lg={2 | 'auto'} xl={2 | 'auto'} xxl={3 | 'auto'}>
                {monstra}
            </Row>
        </React.Fragment>
    );
}
