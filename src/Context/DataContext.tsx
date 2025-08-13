import React from "react";
import useFetch from "../Hooks/useFetch";

type IdataContext = {
  data: IVenda[] | null;
  loading:boolean;
  error:string | null;
  start:string;
  setStart: React.Dispatch<React.SetStateAction<string>>
  end:string;
  setEnd: React.Dispatch<React.SetStateAction<string>>
}

export type IVenda = {
 id: string,
 nome: string,
 preco: number,
 status: "pago" | "processando" | "falha",
 pagamento: "boleto" | "pix" | "cartao",
 parcelas: null | number,
 data: string
}

const DataContext = React.createContext<null | IdataContext>(null);

//usando contexto apartir do proprio contexto
 export function useData(){
  const context = React.useContext(DataContext);
  if(!context) throw new Error("useData precisa estar dentro de um DataContextProvider")
    return context
}

function getFullDate(n:number){
 const date = new Date();
 date.setDate(date.getDate() - n);
 const dd = String(date.getDate()).padStart(2,"0");
 const mm = String(date.getMonth() + 1).padStart(2,"0");
 const yyyy = date.getFullYear();
 return `${yyyy}-${mm}-${dd}`
}


export function DataContextProvider({children}:React.PropsWithChildren){
  const[start,setStart] = React.useState(getFullDate(15));
  const[end,setEnd] = React.useState(getFullDate(0));

  const{data,loading,error} = useFetch<IVenda[]>(`https://data.origamid.dev/vendas?inicio=${start}&final=${end}`)
  return <DataContext.Provider value={{
    data,loading,error,
    start,setStart,end,setEnd
  }}>
    {children}
  </DataContext.Provider>
}