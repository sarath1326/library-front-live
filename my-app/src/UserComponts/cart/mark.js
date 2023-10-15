



<Table striped bordered hover className='table-cart'>

<tbody>



  {

    cartdata.map((obj, index) => (




      <tr className='tr-cart'>

        <td className='img-td' > 
          
          
          <img src={`data:${obj.cartitems.contentType};base64,${obj.cartitems.imageBase64}`} alt='Loading....' className='cart-img' /> 
        
           <span> {obj.cartitems.name}</span><br/>
           
           <span>{obj.cartitems.price} </span>
        
        
        </td>

        {/* <td className='cart-td'>{obj.cartitems.name} <br />

        <span className='item-price'>  {obj.cartitems.price} /- </span> <br/>

          <a className='tda-cart' onClick={() => { more_view(obj.cartitems._id) }}   > view</a>

        </td> */}

        {/* <td className='cart-td'>



          <br />

       <span className='item-price'>  {obj.cartitems.price} /- </span>   


        </td> */}

        <td className='btn-td' >

          <br />

          <button className='cart-btn' onClick={() => { countdecriment(index, obj.item) }}       > - </button >




          <span> {obj.quantity}     </span>





          <button className='cart-btn' onClick={() => { countincriment(index, obj.item) }}       >+</button>



        </td>

        <td className='cart-icon' >

          <br />

          <BsFillTrash3Fill className='icom' onClick={() => { pro_delete(index, obj.item) }} />



        </td>

      </tr>



    ))



  }

</tbody>

</Table>
