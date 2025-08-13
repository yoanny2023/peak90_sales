import React from 'react'
type PaginaProps = {
  children: React.ReactNode
  className?:string
}

function Pagina({children,className}:PaginaProps) {
  return (
    <div className={`overflow-x-hidden px-2 sm:px-4 py-2 flex flex-col min-h-screen 
   bg-gradient-to-br from-purple-950/95 via-slate-950 to-zinc-950
    text-zinc-300 text-xl font-serif
    ${className ? className : ""}
    `}>
      {children}
    </div>   
  )
}
  
export default Pagina
