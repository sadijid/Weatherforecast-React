import React, { useState,useEffect } from 'react'
import WeatherCard from './WeatherCard';

const Temp = () => {
    const [searchValue,setSearchValue] = useState("lalitpur");
    const [tempInfo,setTempInfo] = useState([]);

    const getWeather = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=628b992d4521d87685ca6a9c8a367faa`

            const resp =await fetch(url);
            const data =await resp.json();

            const {temp,humidity,pressure} = data.main;
            const{main:weathermode} = data.weather[0];
            const {name} =data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
                        console.log(temp);
          const weatherInfo = {
                            temp,
                            humidity,
                            pressure,
                            weathermode,
                            speed,
                            name,
                            country,
                            sunset,
                        };
            setTempInfo(weatherInfo);
                        

         }
        catch(error){
            console.log("error")
        }
    };
    useEffect (() =>{
        getWeather();
    },[]);


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search ..."
            autoFocus
            id="search"
            className="searchTerm"
            onChange={(e) =>setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button className="searchButton" type="button" onClick={getWeather}>
            Search
          </button>
        </div>
      </div>
     <WeatherCard tempInfo = {tempInfo}/>
    </>
  );
}

export default Temp
