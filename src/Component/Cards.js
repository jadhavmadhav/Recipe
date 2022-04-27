import React from 'react'

export default function Cards(props) {
  console.log(props.data);
    return (
        <>

           {
            props.data.map((item)=>(  
            <div className='cards col-10 col-sm-6 col-md-3 col-lg-2 pt-4'>
            <div className='card'>
              <div className='card-image-top'>
                 <img src={item.recipe.image} alt="" />
              </div>
              <div className='card-body'>
                 <h6>Recipe: {item.recipe.label}</h6>
                 <p>{item.recipe.mealType}</p>
                 <div className='row'>
                      <div className='col-6'>
                        <p>Price:</p>
                      </div>
                      <div className='col-6'>
                           <button className='Add'>Add</button>
                      </div>
                 </div>
              </div>
            </div>
         </div>
         ))
}        

        </>
    )
}
