



import React from 'react'
import "./Addbox.css"
import Typewriter from "typewriter-effect"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useEffect, useState } from 'react';
import axios from "../../Constant/Axios"
import { useNavigate } from 'react-router-dom';



function Addbox() {

  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '300px',
    // width:'100%'
  }


  const [image, setimages] = useState([])
  const [delya,setdelya]=useState(false)

  useEffect(() => {

    axios("/user/addimages").then((respo) => {


      const result = respo.data

      if (result.flag) {

        setimages(result.data)

        setdelya(true)

        console.log(result.data)

      } else {

        console.log(" add image get err")

      }


    })


  }, [])

  
  const navigate= useNavigate()


  function oneview(proid) {

    navigate(`/oneview/${proid} `);
  }




  return (
    <div className='   addbox-main'>

      <div className=' addbox-text-main'>

        <div className='type-box'>

          <Typewriter

            onInit={(typewriter) => {

              typewriter

                .typeString('Reading is Essential For Those Who  Seek To Rise Above The Ordinary.<p></br> -Jim Rohn </p> ')
                .start()


            }}


            />




      



        </div>




      </div>



      <div className='add-image'>



      {

         delya ?   


         <>




        <p className='add-image-title'>Now Availabel !  </p>


        <div className='slide-box'>


         



          


          <Slide>
           
            {image.map((obj, index) => (
              <div key={index}>

                <div style={{ ...divStyle  }}>

                
                <img className='image-add-set' src={`data:${obj.contentType};base64,${obj.imageBase64}`}  alt='loding...' />

               
                    
                    
                    </div>

                    <button onClick={()=>{oneview(obj._id)}}      className='add-buy-btn'> Buy Now  </button>



              </div>
            ))}
          </Slide>


           </div>

           </>



          : null 






            }








      </div>









    </div>
  )
}

export default Addbox
