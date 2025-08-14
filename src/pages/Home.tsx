import { NavLink } from "react-router-dom"
import Header from "../components/home/Header"
import Footer from "../components/footer/Footer"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Home() {

  useGSAP(()=>{
      const tl = gsap.timeline();  
      tl
      .from(".mainTitle",{y:-150,duration:1,opacity:0,ease:"bounce.Out"})
      .to(".mainTitle",{text:"Finance App",duration:1.5,ease:"power1.in"})
      .fromTo(".title", 
        {y:20,opacity:0},
        {y:0,opacity:1,duration:1,stagger:0.1},"-=0.2")
        tl.from(".btn",{scale:1.5,opacity:0,duration:1,ease:'power1.inOut'},"-=0.4")
    },[]);

  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-violet-950 to-black text-white px-10 py-4">
       <Header />
      <main className="flex flex-1 flex-col justify-center items-center gap-3">
        <h1 className="mainTitle text-3xl hidden sm:block font-bold text-amber-500">Welcome to your</h1>
        <p className="title text-zinc-300 text-3xl max-w-[850px] sm:text-5xl lg:text-6xl text-center font-semibold">
          Welcome to your 90-days sales tracker
        </p>
        <p className="title text-zinc-500 text-center max-w-[450px]">
          Track and visualize your sales from the last 90 days. Stay organized, spot trends, and make smarter business decisions.
        </p>
        <NavLink to="/resumo" >
        <button className="btn mt-3 px-4 py-2 text-zinc-900 font-semibold rounded-xl bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_15px_rgba(245,158,11,0.9)] transition-shadow duration-300 ">
          Get started
        </button>
        </NavLink>
      </main>
      <Footer />
    </div>
  )
}

export default Home
  