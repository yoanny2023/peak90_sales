import React from 'react'
import { NavLink } from 'react-router-dom'
import {IconDashboard,IconHome,IconSum, IconX } from '@tabler/icons-react'
import Pagina from './Pagina'
import Footer from './footer/Footer'

type MenuShowProps = {
setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
function MenuShow({setShowMenu}:MenuShowProps) {
  return (
      
      <Pagina className='px-0 py-0 sm:px-0 bg-gradient-to-br from-black via-violet-950 to-black '>
        <nav className='flex flex-col flex-1 w-[320px] px-3 bg-zinc-800/80 backdrop-blur-xl shadow-lg'>
        <div className='flex items-center justify-between p-3 border-b border-zinc-600 font-semibold'>
          <span className="">Menu</span>
          <span className='text-zinc-300 hover:text-red-700'
          onClick={()=>setShowMenu((prev)=> !prev)}
          >
            <IconX size={20} stroke={1} />
          </span>
        </div>
        <ul className='flex flex-col flex-1 gap-3 mt-3 rounded-lg'>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'
          onClick={()=>setShowMenu((prev)=> !prev)}
        >
          <IconHome  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold" : 'text-zinc-300 hover:text-amber-400 flex-1'
          )}> Home</NavLink>
        </li>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'
          onClick={()=>setShowMenu((prev)=> !prev)}
        >
          <IconSum  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/resumo" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold" : 'text-zinc-300 hover:text-amber-400 flex-1'
          )}>Resume</NavLink>
        </li>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-zinc-950 transition duration-100 py-1 px-2 rounded-xl'
          onClick={()=>setShowMenu((prev)=> !prev)}
        >
          <IconDashboard  stroke={1} size={20} className='text-zinc-100' />
          <NavLink to="/sales" className={({isActive}) => (
            isActive ? "text-amber-500 font-semibold " : 'text-zinc-300 hover:text-amber-400 flex-1'
          )} >Sales</NavLink>
        </li>
          <Footer />
      </ul>
    </nav>
  </Pagina>
      
 
  )
}

export default MenuShow
