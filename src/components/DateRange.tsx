import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

function DateRange() {
const{start,setStart,end,setEnd} = useData()

  return (
    <form onSubmit={(event) => event.preventDefault()}
    className='flex gap-3 order-2 flex-col sm:flex-row md:gap-7 lg:order-1 py-3 px-6  rounded-2xl bg-zinc-600/90
    '>
      <DateInput id='start' label='Start' value={start} setState={setStart} />
      <DateInput id='final' label='End' value={end} setState={setEnd} />
    </form>
    
  )
}

export default DateRange
