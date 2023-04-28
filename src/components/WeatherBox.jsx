import React from 'react'
import cloud from "./icons/cloud.svg"
import cloudsSun from "./icons/clouds-and-sun.svg"
import clouds from "./icons/clouds.gif"
import rain from "./icons/rain.gif"
import snow from "./icons/snowman.gif"
import sun from "./icons/sun.gif"
import mist from "./icons/mist.png"
import fog from "./icons/foggy.gif"

import thunderstorm from "./icons/thunderstorm.svg"
const WeatherBox = (props) => {
const date = new Date();

const dateBuilder =(d)=>{
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date} ${month} ${year}`
  }
  let icon;
  if(props.status == "Clouds"){
    icon = clouds
  }else if(props.status == "Rain"){
    icon = rain
  }else if(props.status == "Snow"){
    icon = snow
  }else if(props.status == "Clear"){
    icon = sun
  }else if(props.status == "Thunderstorm"){
    icon = thunderstorm
  }else if(props.status == "Fog"){
    icon = fog
  }
  else{
    icon = mist
  }

  return (
    <main>
        <div className='weather-box'>
            <img src={icon} alt="" />
            <div>
                <p className='location'>{props.place}, {props.country}</p>
                <p className='temp'>{props.temp}°C</p>
                <p className='status' >{props.status}</p>
                <div className='date'>{dateBuilder(new Date())}</div>
            </div>
        </div>
    </main>
  )
}

export default WeatherBox