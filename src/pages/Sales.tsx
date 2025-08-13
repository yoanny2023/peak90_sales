import { useData } from '../Context/DataContext'
import Loading from '../components/Loading';
import SalesItem from '../components/SalesItem';

function Sales() {

  const{data,loading} = useData();

  if(loading) return <Loading />
  if(data === null) return null;
  return (
    <ul>
      {data
      .sort((a, b) => b.preco - a.preco)
      .map((sale)=>(
        <li key={sale.id}><SalesItem sale={sale}  /></li>
      ))}
    </ul>
  )
}

export default Sales
