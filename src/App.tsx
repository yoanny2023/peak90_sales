import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Pagina from "./components/Pagina";

import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./pages/resumo";
import Sale from "./pages/sale";
import Sales from "./pages/Sales";
import Home from "./pages/Home";
import MenuShow from "./components/MenuShow";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function LayoutPage(){ 
  const[showMenu,setShowMenu] = React.useState(false)
  if(showMenu) return <MenuShow showMenu={showMenu} setShowMenu={setShowMenu}  />
  return (
    <DataContextProvider>
      <Pagina > 
        <div className="min-h-screen w-full">
          <Sidenav setShowMenu={setShowMenu} />
          <main className="p-4 mt-16 md:mt-0 md:ml-[220px] overflow-auto">
               <Header />
              <Routes>
                <Route path="resumo" element={<Resumo />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/sales/:id" element={<Sale />} />
              </Routes>
          </main>
        </div>
      </Pagina>
    </DataContextProvider>
  )
}

function App() { 
    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/*" element={<LayoutPage  />} />
      </Routes>
      </BrowserRouter>
    )
}

export default App
 