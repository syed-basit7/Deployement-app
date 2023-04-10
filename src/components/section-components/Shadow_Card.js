import React from 'react';

const Shadow_Card = (props) => {
  return (
    <>
      <div className='shadow-card text-center p-5'>
          <h5 className='text-warning'>{props.title}</h5>
          <p className='text-secondary lead'>Get ready with ou IDO & INO,  we bring your project to raise  funds and investors.</p>
      </div>
    </>
  );
}

export default Shadow_Card;
