import React from 'react';
import img10 from '../../assets/img/img11.jpg';
import grediant from '../../assets/img/grediant.png';


const Activity_Card = (props) => {
  return (
    <>
        <div class="acticity-card mx-3  ">
            <img src={props.img} class="card-img-top acticity-card-img text-center" alt="..." />
            <div class="card-body ">
                <h5 class="card-title text-white font-family ">Yahya #360</h5>
                    <hr className='bg-secondary'/>
                <div className='d-flex w-100 align-items-center mt-3'>
                    <div className='w-50 d-flex align-items-center'>
                        <img src={grediant} width={'25'}/>
                        <h6 className='purple-color p-0 m-0 ms-2'>3.00ETH</h6>
                    </div>
                    <div className='w-50 d-flex justify-content-center'>
                        <i className='material-icons text-secondary fs-5'>schedule</i>
                         <h6 className=' text-secondary ms-2  p-0 m-0'>11 days left</h6>
                    </div>
                </div>
                <hr className='bg-secondary'/>
                <div className='mt-2'>
                    <div className='d-flex align-items-center'>
                        <h6 className='text-secondary'>Highest Offer</h6>
                        <h6 className='text-white ms-2'>$652.56</h6>
                    </div>
                    <h6 className='text-success'>Accept Highest Bit</h6>
                </div>
            </div>
        </div>
    </>
  );
}

export default Activity_Card;
