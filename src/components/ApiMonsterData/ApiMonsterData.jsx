import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ApiMonsterDetails from '../ApiMonsterDetails/ApiMonsterDetails';

export default function ApiMonsterData({ monsters }) {
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
                <Link 
                    to={"/Monsters/" + monster.index} 
                    key={monster.index} 
                    monstah={monster}
                    getMonstahUrl={getMonstahUrl} 
                    className="btn btn-danger btn-lg p-2 my-1">
                        {monster.name}
                </Link>
                );
        })}
        </React.Fragment>
    )
}