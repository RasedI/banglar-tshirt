import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h3>This is Home: {tshirts.length} </h3>
        </div>
    );
};

export default Home;