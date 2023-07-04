import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import CardMain from './components/CardMain'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)
  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "c109716e67ede1cace0ad6feb3249e6c";
  
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  axios.get(API)
      .then(({data}) => setWeatherInfo(data))
      .catch((err) => console.log(err))
console.log(API)
}

useEffect(() => {
  navigator.geolocation.getCurrentPosition(success)
}, [])



const [theme, setTheme] = useState("light")

useEffect(() =>{
    if (theme === "dark"){
        document.documentElement.classList.add("dark")
    } else{
        document.documentElement.classList.remove("dark");
    }
}, [theme]);

const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light": "dark");
}




  return (
    <>
      <main className='bg-sky-400 dark:bg-violet-900 bg-cover min-h-screen flex flex-col justify-center items-center '>
      <div className='absolute top-16 flex rounded-lg overflow-hidden '>
        
        <button className=' bg-blue-500 dark:bg-violet-600  text-white font-bold py-2 px-4 rounded-full' onClick={handleThemeSwitch}>
        {theme==="light"?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg> }

          </button>

    </div>
    
    
    { weatherInfo ? <> < SearchBar setWeatherInfo={setWeatherInfo}/>  
        
       <CardMain weatherInfo={weatherInfo}/> </>: <Loader/>
       }
       
       
      
      </main>
    </>
  )
}

export default App
