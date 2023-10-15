



import React from 'react'
import './Myoder.css'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios from "../../Constant/Axios";
import { useEffect, useState } from 'react';
import {message} from "antd";
import { GiRoundStar } from "react-icons/gi";
import { FaCircleDot } from "react-icons/fa6";





function Myoder(props) {

  const navigate = useNavigate();

  const [fetchdata, setfetchdata] = useState([]);
  const [empty, setempty] = useState(false);
  const [loding, setloding] = useState(true);

  useEffect(() => {
    axios("/user/myorder", {

      headers: {

        "jwt-token": localStorage.getItem("library_token")


      }


    }).then((respo) => {

      const result = respo.data;

      if(result.err){
        message.error("somthing worng");

      }

      if (result.authfaild) {

        navigate("/Login");
      }

      if (result.flag) {

        setfetchdata(result.data);

        setloding(false);

      } else {

        setempty(true);

      }

    }).catch(err => {

      props.failed(true);


    });

  }, [])


  function view_pro(cartid) {

    navigate(`/placepro/${cartid}`);

  }


  return (
    <div>



      <div className='container'>

        {

          empty ?


            <div className='empty-myoder'>  <img className='empty-img-myoder' src='../emptyoder.jpeg' alt='loging...' />     </div>


            :

            loding ? <div className='loding-myoder'>


              <img className='loding-img-myoder' src='../Book animation.gif' alt='loding...' />




            </div>







              :


             <div className='myoder-main-new'>


              {

                fetchdata.map((obj)=>(



                  <div className='bill-box-new'>

                  <span className='span-status'> Status: {obj.status} <FaCircleDot style={{color:obj.status==="pending"? "red" : "green",fontSize:"15"}} /> </span><br/>
                 
                  <span className='span-other-new'>  Delevary Date:</span> <span className='span-ans'>{obj.delevary_date}</span><br/>
                 
                  <span  className='span-other-new'>  Pay Amount:{obj.totalAmount}</span><br/>
                  
                  <span  className='span-other-new'>  Payment Type: {obj.pyment_method}</span><br/>

                  <button className='btn-bill'  onClick={() => { view_pro(obj._id) }}   > View</button>
                  
                  
                  </div>





                ))

              }


                  










             </div>








        }


      </div>
















    </div>
  )
}

export default Myoder
