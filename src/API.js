import { useState } from "react"
import Table from 'react-bootstrap/Table';
function API()
{
    const [apidata,setApiData]=useState([])
    fetch("https://fakestoreapi.com/products").then((result)=>{
        console.log(result)
        result.json().then((data)=>{
           setApiData(data)
        })
    })

   return(
    <div>
       <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>description</td>
                     <td>Category</td>
                      <td>Image</td>
                </tr>
                {
                    apidata.map((item)=>
                      
                        <tr>
                            <td>{item.title}</td>
                             <td>{item.price*85} Rs</td>
                               <td>{item.description}</td>
                               <td>{item.category}</td>
                <td><img src={item.image} style={{width:"100px",height:"100px"}}></img></td>
                        </tr>
                    )
                }
            </tbody>
           </Table>
    </div>
   )
}
export default API