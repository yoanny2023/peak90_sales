import { useGSAP } from "@gsap/react"
import { IconBrandInstagram,IconBrandLinkedin } from "@tabler/icons-react"
import gsap from "gsap";

function Footer() {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".footer > *",{y:70,opacity:0,duration:2,ease:"power1.out"})
  },[]);

  return ( 
   <footer className={`footer mt-auto flex items-center gap-3`}>
            <span className={`mr-auto text-sm text-zinc-500`}>
                Reserved&copy;_Yv{new Date().getFullYear()}
            </span>
            <a href="https://www.linkedin.com/in/yoanny-vasco-358399132/" target="_blank">
              <IconBrandLinkedin className='w-8 h-8 p-1 rounded-full 
                hover:shadow-[0_0_15px_rgba(245,158,11,0.9)] transition-all duration-300' 
              size={20} stroke={1}
            />
            </a>
            <a href="https://www.instagram.com/yoanny_vaal/" target="_blank">
              <IconBrandInstagram className='w-8 h-8 p-1 rounded-full 
                hover:shadow-[0_0_15px_rgba(245,158,11,0.9)] transition-all duration-300' 
              size={20}  stroke={1} 
            />
            </a>
      </footer>
  )
}

export default Footer
