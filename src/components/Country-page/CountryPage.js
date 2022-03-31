// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CountryPage = ({ country }) => {


    let navigate = useNavigate();
    const handleCountryDetails = () => {
        navigate(`/country-details/${country.name.common}`)
    }

    return (
        <div>
            <div>
                <img className='w-80 h-40' src={country.flags.png} alt="" />
            </div>
            <div className='pt-4'>
                <h2 className=' text-2xl font-bold text-center'>{country.name.common}</h2>
                <h3 className=' text-xl font-bold text-center' title={country.name.official}>Official Name:{country.name.official.length > 10 ? country.name.official.slice(0, 20) + '...' : country.name.official}</h3>
            </div>
            <div className='flex justify-center pt-3'>
                <button onClick={handleCountryDetails} className='text-xl text-white px-8 py-3 hover:text-black bg-rose-500 rounded-lg'>See Details...</button>
            </div>

        </div>
    );
};

export default CountryPage;