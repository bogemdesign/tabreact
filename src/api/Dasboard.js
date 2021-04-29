import React,{ useState ,useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'



function Dasboard(){
  const [Users , setUsers] = useState([]);
   
   
   let yus =  async () => {
  try {
  const ress =  await axios.get('https://jsonplaceholder.typicode.com/users')
   setUsers(ress.data)
   
   } catch (e) {
      console.log(e.massage);
   }
   }
   
   useEffect ( () => {
      yus();
      
      
},[]);

   
   return( 
      <div>
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>email</th>
      <th>website</th>
    </tr>
  </thead>
  <tbody>
      
      
     {
        
        Users.map((user , index)=>{
        return(
           
             <tr key={index}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
    </tr>
           
           )
              })
        
     }
     
     
         
    </tbody>
</Table>
     </div>
)
   
}

export default Dasboard;