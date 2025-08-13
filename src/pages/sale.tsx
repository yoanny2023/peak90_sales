import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import type { IVenda } from '../Context/DataContext';
import Loading from '../components/Loading';

type SaleWithoutDate = Omit<IVenda,"data">

function Sale() {
  const{id} = useParams();
  const{data,loading} = useFetch<SaleWithoutDate>(`https://data.origamid.dev/vendas/${id}`)
  
  if(loading) return <Loading />
  if(data === null) return null;
  
  return (
        <div className='text-[12px] sm:text-xl'>
          <div className='py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'
            >
            ID: {data.id}
          </div>
          <div className='py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Name: {data.nome}
            </div>
          <div className='py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'
            >Price: {data.preco.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}
          </div>
          <div className='py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Status: {data.status}
          </div>
          <div className='py-3 px-6 m-3 bg-zinc-800/50 backdrop-blur-md shadow-2xl rounded-3xl border border-zinc-700
            hover:bg-zinc-800/90 transition duration-300'>
              Payment: {data.pagamento}
          </div>
        </div>
  )
}

export default Sale
