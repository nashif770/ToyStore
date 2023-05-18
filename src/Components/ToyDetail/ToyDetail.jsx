import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetail = () => {
    const toyDetail = useLoaderData();
    console.log(toyDetail);
    const { Picture, Name, Race, Category, Detail, Rating, _id } = toyDetail;
    return (
        <div>
            <h1>Hello there</h1>
            <img src={Picture} alt=""/>
            <h2>{Name}</h2>
            <p>{Detail}</p>
        </div>
    );
};

export default ToyDetail;