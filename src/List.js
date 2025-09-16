import Table from 'react-bootstrap/Table';
function List()
{
    var arr=[{rollno:101,name:"Rahul",marks:55},
        {rollno:102,name:"Golu",marks:77},
        {rollno:103,name:"Shubham",marks:88},
        {rollno:104,name:"Ravi",marks:45}
    ]
   return(
    <div>
          <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td>Rollno</td>
                    <td>Name</td>
                    <td>Marks</td>
                    
                </tr>
                {
                    arr.map((item)=>
                        item.marks>=60?
                        <tr>
                            <td>{item.rollno}</td>
                            <td>{item.name}</td>
                            <td>{item.marks}</td>
                            
                        </tr>:null
                    )
                }
            </tbody>
           </Table>
    </div>
   )
}
export default List