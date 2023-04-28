import React from 'react'
import WeatherBox from './WeatherBox'
import Error from './Error'

const api = {
    key : "f06d527c7d6e829e0a8ff4045c6407e7",
    base: "https://api.openweathermap.org/data/2.5/"
  }

const SearchBar = () => {
    const [location, setLocation] = React.useState("")
    const [weather, setWeather] = React.useState({})
    const handleChange =(event)=>{
        setLocation(event.target.value)
        console.log(event.target.value)
    }
    const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then(responce=> responce.json())
      .then(data => {
        setWeather(data)
         setLocation("")
         console.log(data)
      })
    
}  
  return (
    <div>
        <form className='search' onSubmit={handleSubmit}>
            <input
            className='input'
            type="text"
            placeholder='Enter Location'
            value={location}
            onChange={handleChange}
             />
            <button>Search</button>
        </form>
        { (typeof weather.main != "undefined") ? (<WeatherBox 
        place={weather.name}
        country={weather.sys.country}
        temp={Math.round(weather.main.temp)}
        status={weather.weather[0].main}
        />) : ("")}
        {weather.cod == "404" && <Error/>}
    </div>
  )
}

export default SearchBar