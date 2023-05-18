import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Outlet} from 'react-router-dom';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ReactTab from './ReactTab/ReactTab';

const Home = () => {
    const user = useContext(AuthContext)

    return (
        <div>
            <h1>Home section {user?.displayName}</h1>
            <Banner></Banner>
            <Outlet></Outlet>
            <Gallery></Gallery>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;