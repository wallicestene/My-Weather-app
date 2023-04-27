import React from 'react'
import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import WeatherBox from './components/WeatherBox'

const App = () => {
  return (
    <div>
      <Nav/>
      <div className='weather-con'>
      <SearchBar/>
      </div>
    </div>
  )
}

export default App