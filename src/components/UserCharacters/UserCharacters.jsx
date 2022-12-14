import './UserCharacters.css';
import React, { useEffect, useState } from 'react';
import Loading from "../Loading/Loading";

export default function UserCharacters({ user }) {
    const [userCharactersState, setUserCharactersState] = useState(null);
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
        <>
            {/* <Loading handleLogout={handleLogout} user={user} /> */}
            <Loading user={user}/>
        </>
        );
    }

    return (
        <div className="border border-black">
            <Loading user={user}/>
        </div>
    );
}
