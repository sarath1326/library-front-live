



<div className='myoder-item'>

<Table striped bordered hover>


  <thead>
    <tr>


      <th>Delevery Date</th>
      <th>Price</th>
      <th> Payment type</th>
      <th>Status</th>
      <th> View product</th>
    </tr>
  </thead>


  <tbody>

    {

      fetchdata.map((obj) =>

      (

        <tr>


          <td className='td-myoder'>{obj.delevary_date}</td>

          <td className='td-myoder'>{obj.totalAmount}</td>

          <td className='td-myoder'>{obj.pyment_method}</td>

          <td className='td-myoder'>{obj.status}</td>

          <td className='td-myoder'> <button className='view-btn' onClick={() => { view_pro(obj._id) }}  > View product</button></td>

        </tr>




      )

      )



    }


  </tbody>
</Table>




</div>