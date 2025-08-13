import React from 'react';
/* import Graphs from '../components/Graphs'; */
const Graphs = React.lazy(()=> import("../components/Graphs"))
import Loading from '../components/Loading';
import { useData } from '../Context/DataContext'

function Resumo() {
  const{data,loading} = useData();

  if(loading) return <Loading />
  if(data === null) return null;  
  return (
    <section>
     <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-3 text-sm sm:text-xl md:text-2xl font-semibold'>
        <div className='py-2 px-4 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-500
        '>
          <h2 className="text-zinc-300">Sales</h2>
          <span className='text-amber-600'>
            {data
            .filter((item) => item.status !== "falha")
            .reduce((acc,item)=> acc + item.preco,0)
           .toLocaleString("pt-br",{style:"currency",currency:"BRL"})
            }
          </span>
        </div>
        <div className='py-3 px-6 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-300
        '>
          <h2 className="text-zinc-300">Received</h2>
          <span className='text-amber-600'>
            {data
            .filter((item) => item.status === "pago")
            .reduce((acc,item)=> acc + item.preco,0)
           .toLocaleString("pt-br",{style:"currency",currency:"BRL"})
            }
          </span>
        </div>
        <div className='py-3 px-6 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-300
        '>
          <h2 className="text-zinc-300">Processing</h2>
          <span className='text-amber-600'>
            {data
            .filter((item) => item.status === "processando")
            .reduce((acc,item)=> acc + item.preco,0)
           .toLocaleString("pt-br",{style:"currency",currency:"BRL"})
            }
          </span>
        </div>
      </div>
      <React.Suspense fallback={<Loading />}>
        <Graphs data={data} />
      </React.Suspense>   
    </section>
  )
}

export default Resumo
