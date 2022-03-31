import React, { useEffect, useState } from 'react';
import CountryPage from '../Country-page/CountryPage';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-14 p-10 justify-items-center	'>
                {
                    countries.map(country => <CountryPage country={country}></CountryPage>)
                }

            </div>
        </div>
    );
};

export default Countries;