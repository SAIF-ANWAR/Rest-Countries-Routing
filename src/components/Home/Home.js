import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-5'>HOME PAGE</h1>
            <p className='text-4xl text-center'> You can find all country information here!!!</p>
            <div className='flex justify-center mt-10'>
                <Link className='text-2xl text-center bg-red-400 px-3 py-2 rounded-lg hover:bg-yellow-300' to="/countries">Go to Countries</Link>
            </div>
        </div>
    );
};

export default Home;