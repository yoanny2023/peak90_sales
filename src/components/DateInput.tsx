import React from 'react'
type DateInputProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>
}
function DateInput({label, id, setState, ...props}:DateInputProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <label htmlFor={id} className='block text-sm text-zinc-100 font-bold px-4 py-2 rounded-xl bg-zinc-800' >
        {label}
      </label>
      <input className='self-start px-4 py-2 text-zinc-100 rounded-xl text-sm bg-zinc-800 border border-zinc-700
      focus:outline-none focus:ring-2 focus:ring-amber-500 
      hover:border-amber-500 transition duration-300' 
      type="date" name={id} id={id} {...props} 
        onChange={({currentTarget}) => setState(currentTarget.value)}
      />
    </div>
  )
}

export default DateInput
