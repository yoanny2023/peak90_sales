import { NavLink } from 'react-router-dom';
import type { IVenda } from '../Context/DataContext';

function SalesItem({sale}:{sale:IVenda}) {
  return (
    <div className='text-sm sm:text-xl md:text-[16px] lg:text-xl px-4 py-2 sm:py-3 sm:px-6 m-3 grid grid-cols-1 gap-1 md:grid-cols-[auto_auto_1fr] md:gap-4 items-center  
    bg-zinc-950/60 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
    hover:bg-zinc-800/90 transition duration-300
    '>
      <NavLink className='text-amber-600 font-mono underline underline-offset-2' to={`/sales/${sale.id}`} >{sale.id}</NavLink> 
      <span>{sale.nome}</span>
      <span className='justify-self-end text-amber-400 font-semibold '>{sale.preco.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</span>
    </div>
  )
}

export default SalesItem
