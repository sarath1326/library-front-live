



import React from 'react'
import Home from '../UserComponts/home/Home'
import Navbars from '../UserComponts/navbar/Navbars'
import Rowhome from '../UserComponts/row_home/Rowhome'
import { useState } from 'react'
import Failed from '../UserComponts/Failed/Failed'
import Waiting from '../UserComponts/waiting/Waiting'
import Addbox from '../UserComponts/addbox/Addbox'






function Homepage() {

  const [failed,setfailed]=useState(false)
  const [waiting,setwaiting]=useState(true)
  

  

 
  


   

  return (
    <div>


      

        
       {  failed ? <Failed />


          :
        

      
     <>
      
      
       <Navbars failed={setfailed} />
        
        <Home/>


        <Addbox />




       


        

          <Rowhome title="Literature" url="/user/view/lit" id="lit" failed={setfailed}    />

          <Rowhome title="Education" url="/user/view/edu"  id='edu' failed={setfailed}  />
  
          <Rowhome   title="Genaral" url="/user/view/gen"  id="gen" failed={setfailed}   />


       
          
          



      


        </>


       }

    
      
        
    
      
    
    
    
    </div>
  )
}

export default Homepage
