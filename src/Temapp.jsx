import React, { useEffect, useState } from 'react'

const Temapp = () => {

    const [city, setcity] = useState({
        temp_min: '',
        temp_max: ''
    });
    const [citySearch, setCitySearch] = useState('Mumbai');
    const [search, Setsearch] = useState('Mumbai');
    const [temparature, setTemparature] = useState('');

    const tem = async () => {

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1905697eda4e4c86c2b65d46416d63b0&units=metric`;
            const response = await fetch(url);
            const resjson = await response.json();

            setTemparature(resjson.main.temp);
            setcity(() => {
                return ({
                    temp_min: `${resjson.main.temp_min}`,
                    temp_max: `${resjson.main.temp_max}`,
                })
            })
        } catch (error) {
            alert("API is busy just because of too many Request");

        }
    }


    const setforsearch = () => {

        Setsearch(citySearch);
        tem();
    }
    return (
        <>
            <div className="box">
                <div className='userinput' >
                    <input
                        className='input form-control'
                        type="search"
                        onChange={(event) => {
                            setCitySearch(event.target.value);
                        }} />
                    <button className='btnclass' onClick={setforsearch}>Search</button>
                </div>
                <div className="city">
                    <h2><i className="bi bi-cloud-fill cloud-animation"></i></h2>
                    <span><strong>{search}</strong></span>
                </div>
                <div className="tem">

                    <h2>{temparature}°C</h2>
                </div>
                <div className="min_max mt-2 mb-3   ">
                    <p>Min_Tem:{city.temp_min}°C | Max_Tem:{city.temp_max}°C</p>
                </div>

                <div class="wave one"></div>
                <div class="wave two"></div>
                <div class="wave three"></div>

            </div>
        </>
    )
}

export default Temapp;