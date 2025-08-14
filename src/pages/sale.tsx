import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import type { IVenda } from '../Context/DataContext';
import Loading from '../components/Loading';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

type SaleWithoutDate = Omit<IVenda,"data">

function Sale() {
  const{id} = useParams();
  const{data,loading} = useFetch<SaleWithoutDate>(`https://data.origamid.dev/vendas/${id}`)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(()=>{
    if(!loading && data !== null){
      if(containerRef.current){
        gsap.set(containerRef.current.querySelectorAll(".sale_item"),{
          autoAlpha:0
        });

         gsap.fromTo(containerRef.current.querySelectorAll(".sale_item"),{
        xPercent: 100,
        autoAlpha: 0
        },
        {
        xPercent: 0,
        autoAlpha: 1, 
        duration: 1, 
        ease: "power1.inOut",
        stagger: 0.1
      })
      }
    }
  },[loading,data]);

  if(loading) return <Loading />
  if(data === null) return null;
  
  return (
        <div className='text-[12px] sm:text-xl' ref={containerRef}>
          <div className='sale_item opacity-0 invisible py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'
            >
            ID: {data.id}
          </div>
          <div className='sale_item opacity-0 invisible py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Name: {data.nome}
          </div>
          <div className='sale_item opacity-0 invisible py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'
            >Price: {data.preco.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}
          </div>
          <div className='sale_item opacity-0 invisible py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Status: {data.status}
          </div>
          <div className='sale_item opacity-0 invisible py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Payment: {data.pagamento}
          </div>
        </div>
  )
}

export default Sale
