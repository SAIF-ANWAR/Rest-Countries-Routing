import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    // let params = useParams()
    const { name } = useParams()
    const [country, setCountry] = useState({})
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${name}`

        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))

    }, [name]);
    console.log(country)
    return (
        <div className='flex justify-center pt-5 md:pt-20'>
            <div>
                <img src={country[0]?.flags?.png} alt="" />
                <p className='text-2xl text-start mt-4'> <span className='text-orange-300'>Country:  </span>{country[0]?.name?.common}</p>
                <p className='text-2xl text-start'> <span className='text-orange-300'>Continent:  </span>{country[0]?.continents}</p>
                <p className='text-2xl text-start'> <span className='text-orange-300'>Population  </span>{country[0]?.population}</p>
                <p className='text-2xl text-start'> <span className='text-orange-300'>Languages:  </span>{country[0]?.languages.spa ? country[0]?.languages.spa : "not found"}</p>
            </div>

        </div>
    );
};

export default CountryDetails;