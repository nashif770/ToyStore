import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>Home section {user?.displayName}</h1>
        </div>
    );
};

export default Home;