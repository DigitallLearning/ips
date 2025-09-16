import { useMemo, useState } from "react"

function UseMemo1()
{
    const [data,setData]=useState(0)
    const [count,setCount]=useState(10)
    // function hello()
    // {
    //     console.log("Hello")
    //     return count*5
    // }
    const memo=useMemo(
         function hello()
    {
        console.log("Hello")
        return count*5
    },[count])
   return(
    <div>
        <h1>{memo}</h1>
         <h1>Data : {data}</h1>
         <h1>Count : {count}</h1>
         <button onClick={()=>setData(data+1)}>Data</button>
         <button onClick={()=>setCount(count+1)}>Count</button>
    </div>
   )
}
export default UseMemo1