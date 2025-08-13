import MonthBtn from './MonthBtn'

function getMonthName(base:Date, offset:number){
  const safeDate = new Date(base.getFullYear(), base.getMonth(), 1); // 🛡️ safe day
  safeDate.setMonth(safeDate.getMonth() + offset);
  return new Intl.DateTimeFormat("en-US",{month:"long"}).format(safeDate);
}

function Months() {
    const now = new Date();
    const buttons = [
    { n: -2, label: getMonthName(now, -2) },
    { n: -1, label: getMonthName(now, -1) },
    { n: 0, label: getMonthName(now, 0) },
  ];

  return (
    <div className='flex gap-3 sm:gap-11 md:gap-3'>
      {buttons.map(({ n, label }) => (
        <MonthBtn key={n} n={n} label={label} />
      ))}
    </div>
  )
}

export default Months
