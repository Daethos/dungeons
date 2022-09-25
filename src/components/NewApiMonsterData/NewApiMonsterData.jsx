import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ApiMonsterDetails from '../ApiMonsterDetails/ApiMonsterDetails';
import { Typeahead, Highlighter, Menu, MenuItem, } from 'react-bootstrap-typeahead';
import Card from 'react-bootstrap/Card';

export default function NewApiMonsterData({ monsters, getMonstahUrl }) {
    const [monstahUrl, setMonstahUrl] = useState('');
    function getMonstahUrl(url) {
        setMonstahUrl(url);
    }

    return (
        <React.Fragment>
        {monsters.map((monster) => {
            return (
                // <ApiMonsterDetails 
                //     monster={monster} 
                //     key={monster.index}
                //     loggedUser={loggedUser}
                // />
                <React.Fragment>
                    <Card>
                <img 
                    to={"/Monsters/" + monster.index} 
                    // key={monster.index} 
                    // monstah={monster}
                    src={process.env.PUBLIC_URL + '/images/' + monster.index + '.jpg'}
                    // getMonstahUrl={getMonstahUrl}
                    style={{maxWidth: 30 + 'vw', maxHeight: 30 + 'vh'}} 
                    className="btn btn-danger btn-lg p-2 my-1"
                    >
                        {/* {monster.name} */}
                </img>
                <Link 
                    to={"/Monsters/" + monster.index} 
                    key={monster.index} 
                    monstah={monster}
                    getMonstahUrl={getMonstahUrl} 
                    className="btn btn-danger btn-lg p-2 my-1">
                        {monster.name}
                </Link>
                </Card>
                </React.Fragment>
                );
        })}
        </React.Fragment>
    )
}