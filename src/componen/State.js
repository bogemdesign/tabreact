import React, {useState} from 'react'
import Cild from './Cild'
function State (props){
  const [Num , setNum] = useState(0)
  
   
   const handleMin = () =>{
      const sum = Num - 1
      if(Num <= 0){
         setNum(0)
         return false
      }
      
      
      
   setNum(sum)
      
   };
   
   const handlePlus = () =>{
      const sum = Num + 1
      setNum(sum)
      
   };
   
   
   return(
      <div>
<br/>
<br/>
<br/>
<br/>
      
      hello wolrd <hr/>
      
      <button onClick={handleMin}> - </button>
      <hr/>
      <i> {Num}</i>
      <hr/>
      <button onClick={handlePlus}> + </button>
      
      <Cild t={{Num}}/>
      </div>
      );
}

export default State;