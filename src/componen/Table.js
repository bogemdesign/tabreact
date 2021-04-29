import React from 'react'
import { Table } from 'react-bootstrap'

function Tablle(props){
   return(
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
  
  <tr>
      <td>1</td>
      <td>{props.newUser.fristname}</td>
      <td>{props.newUser.lastname}</td>
      <td>{props.newUser.name}</td>
    </tr>
 
    
    
    </tbody>
</Table>
      
      )
}

export default Tablle;