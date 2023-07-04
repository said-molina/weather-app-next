import React from 'react'
import axios from 'axios'
import { useState } from 'react';


const SearchBar = ({setWeatherInfo}) => {

    const handleBtnForm = (e) => {
        e.preventDefault()
        const cityName = e.target.cityName.value
        const API_KEY = "c109716e67ede1cace0ad6feb3249e6c"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

        
    axios.get(URL)
    .then(({data}) => setWeatherInfo(data))
    .catch((err) => alert("Ciudad no encontrada"))
    }



  return (
    <>
    <form onSubmit={handleBtnForm}>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="cityName" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-sky-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required></input>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-violet-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
    </div>
</form>
        
    
   
    </>
  )



}

export default SearchBar