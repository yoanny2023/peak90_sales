import React from 'react';
import DateRange from './DateRange';
import Months from './Months';
import { useLocation } from 'react-router-dom';

function Header() { 
  const location = useLocation();
  const[title,setTitle] = React.useState("Summary");

  React.useEffect(()=>{
    if(location.pathname === "/"){
      setTitle("Summary");
      document.title = "Peak90 | Summary";
    }else if(location.pathname === "/sales"){
      setTitle("Sales");
      document.title = "Peak90 | Sales"
    }
  },[location])

  return (
    <header className='mb-3'>
      <div className='grid md:grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 mb-3'>
        <DateRange />
        <h1 className='bg-amber-500/80 px-4 py-2 md:px-6 md:py-4 rounded-xl text-xl order-1 justify-self-start lg:justify-self-stretch lg:text-3xl 
        text-zinc-100 font-semibold backdrop-blur-lg shadow-lg'>
          {title}
        </h1>
      </div>
      <Months />
    </header>
  )
}

export default Header
