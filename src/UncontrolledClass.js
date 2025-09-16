const { Component, createRef } = require("react");
class UncontrolledClass extends Component
{
    constructor()
    {
        super()
        this.inputref=createRef()
    }
   hello()
        {
              this.inputref.current.value="Hello World";
              //console.log( this.inputref.current.value)
            this.inputref.current.style.color="red";
             this.inputref.current.style.backgroundColor="green";
        }
    
  render()
  {
    return(
        <div>
           <input type="text" placeholder="Enter Name" ref={this.inputref}></input><br></br>
           <button onClick={()=>this.hello()}>Submit</button>
        </div>
    )
  }
}
export default UncontrolledClass