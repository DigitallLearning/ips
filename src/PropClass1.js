import { Component } from "react";
import PropClass2 from "./PropClass2";
class PropClass1 extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            uname:"Ram",
            uage:25
        }
    }
   render()
   {
    return(
        <div>
           <PropClass2 name={this.state.uname} age={this.state.uage}></PropClass2>
           <button onClick={()=>this.setState({uname:"Syam",uage:30})}>Submit</button>
        </div>
    )
   }
}
export default PropClass1