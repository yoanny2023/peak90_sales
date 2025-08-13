import React from 'react'
import { useData } from '../Context/DataContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

type MonthBtnProps = React.ComponentProps<"button"> & {
n:number;
label:string;
className?: string;
}

function MonthBtn({n,label,className}:MonthBtnProps) {
  const{setStart,setEnd} = useData();
  const location = useLocation();

    useGSAP(() => {
      gsap.set(".gsap_btn",{yPercent: -100, autoAlpha:0},)
      gsap.to(".gsap_btn",
        {yPercent: 0, autoAlpha:1, duration:1, ease:"power1.inOut", stagger: 0.3,delay:0.5})
    },[]);  

 function formatDate(date:Date){
 const dd = String(date.getDate()).padStart(2,"0");
 const mm = String(date.getMonth() + 1).padStart(2,"0");
 const yyyy = String(date.getFullYear());
 return `${yyyy}-${mm}-${dd}`
}
 
 function setMonths(n:number){
    const today = new Date();
    const base = new Date(today.getFullYear(), today.getMonth(), 1);
    base.setMonth(base.getMonth() + n);

  const firstDay = new Date(base.getFullYear(), base.getMonth(),1);  
  const lastDay = new Date(base.getFullYear(), base.getMonth() + 1,0);
  setStart(formatDate(firstDay));
  setEnd(formatDate(lastDay));
}

  return (
    <button className={`opacity-0 invisible flex-1 text-sm sm:text-xl px-2 py-1 lg:px-6 lg:py-4 rounded-xl capitalize font-semibold border-none outline-none 
    bg-amber-500 text-zinc-100 hover:bg-amber-600 hover:text-amber-900 transition duration-300
     active:bg-amber-700 active:scale-95
     ${className ? className : ""}
     `}
     onClick={()=> setMonths(n)}
     >
     {label}  
    </button>
  )
}

export default MonthBtn
