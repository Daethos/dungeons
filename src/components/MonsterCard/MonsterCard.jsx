import './MonsterCard.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function MonsterCard({ monsters }) {
    // const [userCharactersState, setUserCharactersState] = useState(null);
    // style={{maxWidth: 50 + 'vw'}}
    //  style={{maxWidth: 25 + 'vw'}}
    // style={{maxWidth: 100 + 'vw', height: 100 + 'vh'}}
    console.log(monsters.length, '<- Monster count')
    
    

    let monstras = monsters.map((monster) => {
        return (
            <React.Fragment>
            <div class="stat-block wide">
            <hr class="orange-border" />
            <div class="section-left">
                <div class="creature-heading">
                    <h1>{monster.name}</h1>
                    <h2>{monster.size} {monster.type}, {monster.alignment}</h2>
                </div> 
                <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                <div class="top-stats">
                    <div class="property-line first">
                        <h4>Armor Class</h4>
                        <p>{monster.armor_class}</p>
                    </div> 
                    <div class="property-line">
                        <h4>Hit Points</h4>
                        <p>{monster.hit_points} ({monster.hit_dice})</p>
                    </div> 
                    <div class="property-line last">
                        <h4>Speed</h4>
                        {/* <p>{monster.speed}</p> */}
                    </div> 
                    <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                    <div class="abilities">
                        <div class="ability-strength">
                            <h4>STR</h4>
                            <p>{monster.strength}</p>
                        </div> 
                        <div class="ability-dexterity">
                            <h4>DEX</h4>
                            <p>{monster.dexterity}</p>
                        </div> 
                        <div class="ability-constitution">
                            <h4>CON</h4>
                            <p>{monster.constitution}</p>
                        </div> 
                        <div class="ability-intelligence">
                            <h4>INT</h4>
                            <p>{monster.intelligence}</p>
                        </div> 
                        <div class="ability-wisdom">
                            <h4>WIS</h4>
                            <p>{monster.wisdom}</p>
                        </div> 
                        <div class="ability-charisma">
                            <h4>CHA</h4>
                            <p>{monster.charisma}</p>
                        </div> 
                    </div>
                    <svg height="5" width="100%" class="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div class="property-line first">
                        <h4>Damage Immunities</h4>
                        {/* <p>{monster.damage_immunities}</p> */}
                    </div> 
                    <div class="property-line">
                        <h4>Condition Immunities</h4>
                        {/* <p>{monster.condition_immunities}</p> */}
                    </div> 
                    <div class="property-line">
                        <h4>Senses</h4>
                        {/* <p>{monster.senses}</p> */}
                    </div> 
                    <div class="property-line">
                        <h4>Languages</h4>
                        <p>{monster.languages}</p>
                    </div> 
                    <div class="property-line last">
                        <h4>Challenge</h4>
                        <p>{monster.challenge_rating}</p>
                    </div> 
                </div> 
                <svg height="5" width="100%" class="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
                {/* {monster.special_abilities} */}
                <div class="property-block">
                    <h4>{monster.name}.</h4>
                    {/* <p>{monster.desc}</p> */}
                </div> 
                
            </div> 
            <div class="section-right">
                <div class="actions">
                    <h3>Actions</h3>
                    {/* {monster.actions} */}
                    <div class="property-block">
                        <h4>{monster.name}.</h4>
                        {/* <p>{monster.desc}</p> */}
                    </div> 
                    
                </div> 
                <div class="actions">
                    <h3>Legendary Actions</h3>
                    {/* {monster.legendary_actions} */}
                    <div class="property-block">
                        <h4>{monster.name}.</h4>
                        {/* <p>{monster.desc}</p> */}
                    </div> 
                    <img src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'} alt={monster.name} id="monster-card-image" />
                </div> 
            </div> 
            <hr class="orange-border bottom" />
        </div>
        </React.Fragment>
        )
    })



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
                {monstras}
            </Row>
        </React.Fragment>
    );
}
