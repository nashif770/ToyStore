import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Outlet} from 'react-router-dom';

const Home = () => {
    const user = useContext(AuthContext)

    return (
        <div>
            <h1>Home section {user?.displayName}</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;