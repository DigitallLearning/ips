import { useEffect, useState } from "react"
function Effect()
{
    const [data,setData]=useState(0);
    useEffect(()=>{
       console.log("Loading...") 
    })
    return(
        <div>
          <h1>Data {data}</h1>
          <button onClick={()=>setData(data+1)}>button</button>  
        </div>
    )
}
export default Effect