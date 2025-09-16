import { useRef } from "react"

function UncontrolledForm()
{
    const nameref=useRef()
    const ageref=useRef()
 function submitForm(e)
 {
  e.preventDefault()
   const name=nameref.current.value;
   const age=ageref.current.value;
   console.log(name,age)
 }
  return(
    <div onSubmit={submitForm}>
    <form>
        <input type="text" placeholder="Enter Name" ref={nameref}></input><br></br>
       <input type="number" placeholder="Enter Age" ref={ageref}></input><br></br>
       <button>Submit</button>
    </form>
    </div>
  )
}
export default UncontrolledForm