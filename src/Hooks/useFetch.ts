import { useEffect, useRef, useState } from "react"

export default function useFetch<T>(url:RequestInfo | URL ,options?:RequestInit){
  const[data,setData] = useState<null | T>(null)
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState<null | string>(null)

  const optionsRef = useRef(options);
  optionsRef.current = options;
 
  useEffect(()=>{
   const controller = new AbortController(); // used to abort request when component unmounts
    const{signal} = controller; 

    async function fetchData(){
           setLoading(true);
           setData(null);

          try {
            const response = await fetch(url,{
              signal: signal,
              ...optionsRef.current
            });

            if(!response.ok) throw new Error(`Error,${response.status}`);

            console.log(response)
            const result = (await response.json()) as T;
            if(!signal.aborted) setData(result)

          }catch (error) {
              console.log(error)
              if(!signal.aborted && error instanceof Error) setError(error.message)
          }finally{
            if(!signal.aborted) setLoading(false)
          }
        }
          fetchData();

      return ()=> {
        controller.abort()
      }; // clean up function when components unmounts
  },[url])
  return {data,loading,error}
}