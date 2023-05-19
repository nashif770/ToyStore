import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Outlet} from 'react-router-dom';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ReactTab from './ReactTab/ReactTab';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const user = useContext(AuthContext)

    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <h2 className='text-3xl font-bold text-center m-4'>Checkout Our Store</h2>
            <ReactTab></ReactTab>
            <h2 className='text-3xl font-bold text-center m-4'>See Our Gallery</h2>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;