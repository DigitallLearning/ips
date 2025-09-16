import { useRef } from "react"

function UncontrolledFun()
{
    const inputref=useRef()
      hello()
        {
              inputref.current.value="Hello World";
              //console.log(inputref.current.value)
            inputref.current.style.color="red";
             inputref.current.style.backgroundColor="green";
        }
    return(
        <div>
           <input type="text" placeholder="Enter Name" ref={inputref}></input><br></br>
           <button onClick={()=>hello()}>Submit</button>
        </div>
    )
}
export default UncontrolledFun