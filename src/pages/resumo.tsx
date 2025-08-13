import React from 'react';
const Graphs = React.lazy(()=> import("../components/Graphs"))
import Loading from '../components/Loading';
import { useData } from '../Context/DataContext'
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css"

function Resumo() {
  const{data,loading} = useData();
  const[sold,setSold] = React.useState(0);
  const[paid,setPaid] = React.useState(0);
  const[processing,setProcessing] = React.useState(0);

  React.useEffect(()=> {
      if(!loading && data !== null){

       const timer = setTimeout(()=>{
         const convertSold = data
            .filter((item) => item.status !== "falha")
            .reduce((acc,item)=> acc + item.preco,0)

             setSold(Number(convertSold.toFixed(2)));
             
         const convertPaid = data
            .filter((item) => item.status === "pago")
            .reduce((acc,item)=> acc + item.preco,0)

             setPaid(Number(convertPaid.toFixed(2)));

         const convertProcessing = data
            .filter((item) => item.status === "processando")
            .reduce((acc,item)=> acc + item.preco,0)

             setProcessing(Number(convertProcessing.toFixed(2)));

        },1500);

        return () => clearTimeout(timer)
    }
   
  },[loading, data]); 

   if(loading) return <Loading />
  if(data === null) return null; 

  return (
    <section>
     <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-3 text-sm sm:text-xl md:text-2xl font-semibold'>
        <div className='py-2 px-4 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-500
        '>
          <h2 className="text-zinc-300">Sales</h2>
          <span className='text-amber-600' >
            R$ <Odometer value={sold} format="(,ddd).dd" />
          </span> 
        </div>
        <div className='py-3 px-6 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-300
        '>
          <h2 className="text-zinc-300">Received</h2>
          <span className='text-amber-600'>
            R$ <Odometer value={paid} format="(,ddd).dd" />
          </span>
        </div>
        <div className='py-3 px-6 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-800/80
        hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:border hover:border-amber-500 hover:scale-[1.02] transition duration-300
        '>
          <h2 className="text-zinc-300">Processing</h2>
          <span className='text-amber-600'>
            R$ <Odometer value={processing} format="(,ddd).dd" />
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
