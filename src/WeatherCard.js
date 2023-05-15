import React ,{useState,useEffect} from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState,setWeatherState] =useState();
                const{
                    
                            temp,
                            humidity,
                            name,
                            pressure,
                            weathermode,
                            speed,
                            country,
                            sunset,
                        } = tempInfo;

                        let sec = sunset;
                        let date = new Date(sec * 1000);
                        let timeStr = `${date.getHours()}:${date.getMinutes()}`
                        
                        useEffect(() =>{
                            if (weathermode) {
                             switch (weathermode) {
                               case "Clouds":
                                 setWeatherState("wi-day-cloudy");
                                 break;
                               case "Haze":
                                 setWeatherState("wi-fog");
                                 break;
                               case "Clear":
                                 setWeatherState("wi-day-Sunny");
                                 break;
                               case "Mist":
                                 setWeatherState("wi-dust");
                                 break;

                               default:
                                 setWeatherState("wi-day-Sunny");

                                 break;
                             }
                            }
                        },[weathermode])

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`} />
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermode}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                {" "}
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                {timeStr}<br/>
                sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard
