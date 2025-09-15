import { useState } from "react"

function HOC()
{
   return(
    <div>
        <CmpRed cmp={Counter}></CmpRed>
        <Cmpgreen cmp={Counter}></Cmpgreen>
    </div>
   )
}
function Cmpgreen(prop)
{
     return(
        <h1 style={{backgroundColor:"green"}}><prop.cmp></prop.cmp></h1>
     )  
}
function CmpRed(prop)
{
     return(
        <h1 style={{backgroundColor:"red"}}><prop.cmp></prop.cmp></h1>
     )  
}
function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Submit</button>
        </div>
    )
}
export default HOC