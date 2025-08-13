import DateInput from './DateInput'
import { useData } from '../Context/DataContext'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

function DateRange() {
const{start,setStart,end,setEnd} = useData();
const location = useLocation();

useGSAP(()=>{
 gsap.from(".gsap_form",{yPercent:-100, opacity:0, duration:1, ease:"power1.inOut"})
},[location.pathname]);

  return (
    <form onSubmit={(event) => event.preventDefault()}
    className='gsap_form flex gap-3 order-2 flex-col sm:flex-row md:gap-7 lg:order-1 py-3 px-6  rounded-2xl bg-zinc-600/90
    '>
      <DateInput id='start' label='Start' value={start} setState={setStart} />
      <DateInput id='final' label='End' value={end} setState={setEnd} />
    </form>
    
  )
}

export default DateRange
