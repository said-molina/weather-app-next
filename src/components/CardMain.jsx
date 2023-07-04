import { useState } from "react"
import icons from "../data/icons.json"

const CardMain = ({weatherInfo}) => {

    const kelvinToCelsius = (temp) => {
        return (temp - 273.15).toFixed(0)
    }
    
     const kelvinToFarenheit = (temp2) => {
        return ((temp2 -273.15) * (9/5) +32).toFixed(0)
    }

    const [isCelsius, setIsCelsius] = useState(true)

    const showIcon = icons[0][weatherInfo?.weather[0].icon]?.icon 
    console.log(weatherInfo)

  

    return (
      <>
        <section className="text-center grid gap-6  select-none text-sky-600 dark:text-white ">
          <section className=" grid gap-4 sm:grid-cols-[1fr_auto]">
            <article className="bg-sky-200  p-2 rounded-2xl grid grid-cols-2 items-center sm:p-4 transition-all duration-200 ease-linear shadow-xl  dark:bg-violet-600">
                <h1 className="text-6xl tracking-widest sm:text-[1.5rem] sm:tracking-[.15em] md:text-8xl">{isCelsius ? kelvinToCelsius(weatherInfo?.main.temp) : kelvinToFarenheit(weatherInfo?.main.temp)}°</h1>
                <div className='grid justify-items-end transition-all duration-500 ease-in-out'>
                    <img className="sm:w-[105px] md:w-[125px] transition-all duration-500 ease-in-out" src={showIcon} alt="" />
                </div>
                <div className="flex flex-col">
                <span className='text-left text-sm '>Viento {weatherInfo?.wind.speed} km/h</span>
                <h3 className='text-left text-sm'>Nubes {weatherInfo?.clouds.all} %</h3>
                <h3 className='text-left text-sm'>Presion {weatherInfo?.main.pressure} pHa</h3>
                </div>
                
                <h3 className='text-right text-sm capitalize font-bold'>{weatherInfo?.weather[0].description}</h3>
                <h3 className='text-left text-2xl '>{weatherInfo?.name}, {weatherInfo?.sys.country}</h3>
            </article>
          </section>

          <div>
        <button onClick={() => setIsCelsius(!isCelsius)} className=' w-fit py-2 px-5 rounded-3xl bg-sky-600 text-white  sm:px-9 transition-all duration-100 ease-in hover:bg-blue-100 hover:text-blue-950 dark:bg-violet-600 dark:text-white dark:hover:bg-blue-500 dark:hover:text-withe'>{isCelsius ?"Cambiar a °F":"Cambiar a °C"}</button>
        </div>
        </section>
        
      </>
    );
}
export default CardMain