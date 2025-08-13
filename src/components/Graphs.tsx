import React from "react"
import type { IVenda } from "../Context/DataContext"
import { VictoryPie,VictoryChart,VictoryBar, VictoryAxis } from "victory";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type GraphProps = {
  data: IVenda[]
}

type IGraph = {
  x:string;
  y:number
}
function Graphs({data}:GraphProps){ 

  const[graph,setGraph] = React.useState<IGraph[]>([]);
   
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gsap_graph",  
        start: "top 75%",  
        end: "bottom 90%",
        scrub:4,
      }
    });

    tl.from(".gsap_graph",{scale:0.5,opacity:0.3,duration:1, ease:"power1.inOut"})
  },[])

  React.useEffect(()=>{
    const ItemsPaid = data.filter((person)=> person.status === "pago");
    const totalPerCustomer = ItemsPaid.reduce((acc,item)=>{
    const{nome,preco} = item;

    if(!acc[nome]){
      acc[nome] = preco
    }else{
      acc[nome] += preco
    }
    return acc;
  },{} as Record<string, number>);

  const graphData = Object.entries(totalPerCustomer)
          .map(([x,y]) => ({x,y}))
          .sort((a, b) => a.y - b.y)
          .slice(0, 5);
  setGraph(graphData)
  },[data])

  return (
   <section className='gsap_graph py-3 px-6 m-3 flex flex-col flex-1 gap-3 rounded-2xl bg-zinc-600/90
   '>
    <h2 className="text-center text-2xl">Statistics</h2>
    <h2 className="text-white font-semibold text-2xl">Top 5 Clients</h2>
    <div className="grid gap-2 sm:gap-4 md:grid-cols-1 lg:grid-cols-2 ">
      <div className="bg-zinc-900/90 rounded-lg  hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:scale-[1.02] transition duration-300">
      <VictoryPie data={graph} 
      innerRadius={50}
      padAngle={5} 
      padding={{
        top:20,bottom:20,
        left:100,right:100
        }}
        style={{
          data:{
            fillOpacity:0.9,
            stroke:"#fb1",
            strokeWidth:2
          },
          labels:{
            fontSize:14,
            fill:"#fff"
          }
        }}
        />
    </div>
    <div className="bg-zinc-900/90 rounded-lg  hover:bg-zinc-950/90 shadow-md hover:shadow-amber hover:scale-[1.02] transition duration-300">
      <VictoryChart domainPadding={20}>
       { <VictoryAxis
          style={{
            tickLabels: { fill: '#fff', fontSize: 12 },
            axis: { stroke: '#fff' },
          }}
        />}
        <VictoryAxis dependentAxis
          style={{
            tickLabels: { fill: '#facc15', fontSize: 12 },
            axis: { stroke: '#fff' },
            grid: { stroke: '#555' }, // Optional grid color
          }}
        />
        <VictoryBar alignment="start" data={graph}
        labels={({ datum }) => datum.y}
        style={{
          data: { fill: '#facc15' },
          labels: { fill: '#fff', fontSize: 12}
        }}
         />
      </VictoryChart>
    </div>
    </div>
  </section>
  )
}
 
export default Graphs
