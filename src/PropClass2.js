import { Component } from "react";

class PropClass2 extends Component
{
   render()
   {
    return(
        <div>
           <h1>MY name is {this.props.name}</h1>
            <h1>MY age is {this.props.age}</h1>
        </div>
    )
   }
}
export default PropClass2