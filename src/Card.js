import React from 'react';

const Card=(props)=>{
  //const {name,email,id}=props;
  //h2 name also can be done
  //or withn in parameter use destructor({name,email,id})
  return(
  <div className='bg-washed-red dib br3 ma2 grow bw2 shadow-5 tc'>
    <img src={`https://robohash.org/${props.id}?200x200` } />
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  </div>
  );
  
}
export default Card;