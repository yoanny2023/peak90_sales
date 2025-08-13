import { IconGraphFilled } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 

function Header() {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl
      .from(".logo",{x:-150,ease:"bounce.out",duration:1})
      .from(".home_menu > .menu_item",{y:-70,duration:1,ease:"power1.inOut",stagger:0.2},"-=0.5")
  },[]);

  return (  
     <nav>
      <ul className='home_menu flex flex-col gap-2 items-center sm:flex-row sm:gap-7 h-16 font-semibold'>
        <li className='logo mr-auto text-amber-500'>
        <NavLink className="flex gap-2" to="/">
        <IconGraphFilled stroke={1} size={24} />
        <span>Peak90</span>
        </NavLink>
        </li>
        <li className="menu_item">
          <NavLink className="relative group inline-block text-amber-500"
           to="/">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-[85%]"></span>
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink className="relative group inline-block" to="/resumo">
            Get Started
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-[85%]"></span>
          </NavLink>
        </li>
        <li className="menu_item">
        <a className="relative group inline-block" href="https://www.linkedin.com/in/yoanny-vasco-358399132/" target='_blank' >
          Reach Me
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-[85%]"></span>
        </a>
        </li>
      </ul>
     </nav>
  )
}

export default Header
