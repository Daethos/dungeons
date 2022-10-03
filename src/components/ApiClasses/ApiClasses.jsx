import React, { useEffect, useState } from 'react';
import Loading from "../Loading/Loading";

export default function ApiCharacters({ user }) {
    const [characterState, setCharacterState] = useState(null);
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
        <div className="border border-black" style={{ backgroundImage: 'url(/images/R13.png)' }}>
            
        </div>
    );
}
