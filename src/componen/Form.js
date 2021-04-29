import React, { useState } from 'react'
import {Form , Button , Card} from 'react-bootstrap'
import Tablle from './Table'


function Formulir(){
const [fristname, setFristname]=
      useState('');
const [lastname , setLastname] =
      useState('');
let [name , setName] =
      useState('');
   
   
const handlersumbit = (e) =>{
   e.preventDefault();
   
   setName(`${fristname} ${lastname}`);
 //  console.log(setName);
  // setFristname('');
   //setLastname('');
   
} 
const clear = () => {

   setFristname('')
   setLastname('')
   
}
   
   
   
  return(
 <div className='py-5 '>
  
  
  <Card>
  <Card.Body>
  <Form onSubmit={ handlersumbit }>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nama Depan</Form.Label>
    <Form.Control type="text" placeholder="text" name='fristname'
    value ={fristname}
    onChange={ (e) => setFristname(e.target.value)  }
    />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Nama Belakang</Form.Label>
    <Form.Control type="text" placeholder="text" name='lastname'
      value ={lastname}
    onChange={ (e) => setLastname(e.target.value)  }
    />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">

  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Card.Body>
<Card.Footer>
My Name Is { name? name : '...'}
</Card.Footer>
</Card>
    
<Tablle newUser ={{

fristname: fristname,
lastname : lastname,
name : name
   
   
}}/>
{clear}
    </div>
    
    )
  
}

export default Formulir;