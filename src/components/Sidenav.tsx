import { useGSAP } from '@gsap/react'
import { IconDashboard, IconGraphFilled,IconHome,IconMenu2,IconSum } from '@tabler/icons-react'
import gsap from 'gsap'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './footer/Footer'

type sidenavProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
  
function Sidenav({setShowMenu}:sidenavProps) {
  
 useGSAP(()=>{
      gsap.from(".gsap_nav",{xPercent:-100,opacity:0,duration:1,ease:"power1.inOut"})
 },[]);

  return (
    <nav className='gsap_nav flex flex-row gap-1 text-sm sm:text-[16px] fixed z-10 w-[90%] sm:flex-row md:gap-3 md:fixed md:left-4 md:flex-col md:w-[210px] md:h-[97vh] 
    bg-zinc-700/80 backdrop-blur-xl shadow-lg rounded-lg px-4 py-2'>
      <NavLink to="/" 
       className='flex items-center gap-2 font-semibold text-amber-500
       mr-auto md:mr-0
       '>
        <IconGraphFilled stroke={1} size={20} />
        <span> Peak90</span>
      </NavLink>
      <div className='sm:hidden cursor-pointer p-1 rounded-lg border-2 border-amber-500'>
        <IconMenu2 className='hover:text-violet-500' size={20} stroke={1} onClick={()=> setShowMenu((prev) => !prev)} />
      </div>      
      <ul className='hidden sm:flex sm:flex-row sm:gap-3 md:flex-col  '>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'>
          <IconHome  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold" : 'text-zinc-300 hover:text-amber-400 flex-1'
          )} >Home</NavLink>
        </li>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'>
          <IconSum  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/resumo" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold" : 'text-zinc-300 hover:text-amber-400 flex-1'
          )} >Resume</NavLink>
        </li>  
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'>
          <IconDashboard  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/sales" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold " : 'text-zinc-300 hover:text-amber-400 flex-1'
          )} >
            Sales
          </NavLink>
        </li>
      </ul>
      <Footer className="hidden" /> 
    </nav>
  )
}

export default Sidenav
