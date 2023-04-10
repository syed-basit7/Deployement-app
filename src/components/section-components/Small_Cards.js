import React from 'react';

const Small_Cards = (props) => {
  return (
    <>
      <div style={{minWidth: '200px'}} className='border my-4 slider-card small-card d-flex  p-3 rounded-3 mx-3'>
          <img src={props.img} width={'50'} height={'50'} className='rounded-circle'/>
          <div className='ms-3'>
              <h6 className='theme-color font-family'>{props.name}</h6>
              <h6 className='text-warning'>16.5</h6>
          </div>
      </div> 
    </>
  );
}

export default Small_Cards;
