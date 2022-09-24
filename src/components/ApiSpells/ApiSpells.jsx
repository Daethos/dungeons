import React, { useEffect, useState } from 'react';
import Loading from "../Loading/Loading";

export default function ApiSpells({ user }) {
    const [spellState, setSpellState] = useState(null);
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
            
        </div>
    );
}
