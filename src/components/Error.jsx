import React from 'react'

const Error = () => {
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
  return (
    <main>
        <div className='weather-box'>
          <div className='error'>
            <h2>404</h2>
          </div>
            <div>
                <p className='oops'>Oops!</p>
                <p className='error-text'>We can't find the city you are looking for.</p>
                <p className='status'>Try again</p>
                <div className='date'>{dateBuilder(new Date())}</div>
            </div>
        </div>
    </main>
  )
}

export default Error