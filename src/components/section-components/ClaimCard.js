import React from 'react';
import defaultProps from 'react-slick/lib/default-props';

const ClaimCard = (props) => {
  return (
    <>
        <div className='claim-card p-3 row '>
          <div className='col-lg-6 my-3 d-flex align-items-center'>
            <img width={65} height={65} className='rounded-circle' src={props.img}/>
            <div className='ms-3'> 
              <h5 className='text-white font-family'>{props.title}</h5>
              <h5 className='text-white font-family'>(14th Vesting)</h5>
            </div>
          </div>
          <div className='col-lg-6 my-3 d-flex align-items-center justify-content-between '>
            <div className='border-start border-end border-secondary px-3'>
              <p className='text-secondary lead fs-sm2'>Your Location</p>
            </div>
            <div className=''>
              <p className='text-secondary p-0 m-0 fs-sm2'>Slaim start date</p>
              <p className='text-white'>2023-Mar-18 19:00 UTC</p>
            </div>
            <div>
                <button className='btn btn-outline-primary rounded-1 text-white'>unavailable</button>
                <i className='material-icons rounded-circle p-3 ms-3 fs-4 text-white add-task' title='add thise token to Metamask '>library_add</i>
            </div>
          </div>
        </div>   
    </>
  );
}

export default ClaimCard;
