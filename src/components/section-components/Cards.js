import React from 'react';
import img from '../../assets/img/img1.jpg';
import { Link } from 'react-router-dom';


const Cards = (props) => {
  return (
    <>
        <div class="nft-card mx-3 p-3 ">
            
            <div className='d-flex align-items-center'>
                <img src={props.img} class="rounded-circle" width={65} height={65} alt="..." />
                <div className='ms-2'>   
                    <h5 class="card-title text-white font-family text-center">Yahya #360</h5>
                </div>
            </div>
            <div class="">
           
                <div className='d-flex my-3 align-items-center justify-content-between'>
                    <div className='p-3 card-mid-text '>
                        <small className='text-white p-0 m-0 fs-sm'> CRYPTO</small>
                        <h6 className='text-warning p-0 m-0 '>$16582.5</h6>
                    </div>
                    <div className='p-3 card-mid-text mx-1'>
                        <small className='text-white p-0 m-0 fs-sm'>INVESTMENT</small>
                        <h6 className='text-warning p-0 m-0 '>$5622.5</h6>
                    </div>
                    <div className='p-3 card-mid-text '>
                        <small className='text-white p-0 m-0 fs-sm'>CRYPTO</small>
                        <h6 className='text-warning p-0 m-0 '>$5622.5</h6>
                    </div>
                </div>

                <hr className='bg-secondary'/>


                <div className='d-flex w-100 align-items-center mt-3'>
                    <h6 className='w-50 purple-color p-0 m-0'>3.00ETH</h6>
                    <div className='w-50 d-flex justify-content-center'>
                        <i className='material-icons text-secondary fs-5'>schedule</i>
                         <h6 className=' text-secondary ms-2  p-0 m-0'>11 days left</h6>
                    </div>
                </div>
                <hr className='bg-secondary'/>
                <div className='d-flex align-items-center mt-3'>
                    <div className='w-75'>
                        <h6 className='text-white'>Compeleted in next 30 days</h6>
                    </div>
                    <div className='w-25 text-end'>
                        <h6 className='theme-color '>80%</h6>
                    </div>
                </div>
                    <div class="progress mt-1 mb-3" style={{height: '5px'}}>
                        <div class="progress-bar bg-warning" role="progressbar" style={{width : '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className='w-100 text-end'>
                        <h6 className='text-white p-0 m-0'>Listing Time</h6>
                        <h6 className='text-warning p-0 m-0'>TBA</h6>
                    </div>
                <hr className='bg-secondary'/>
                <Link to='/profile' className='text-decoration-none'>
                    <div className='d-flex mt-2 align-items-center'>
                        <img src={img} class="rounded-circle" width={'40'} height={'40'} alt="..." />
                        <div className='ms-3'>
                            <h6 className='text-secondary'>Createion of <span className='text-warning font-family'>Yahya</span> </h6>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </>
  );
}

export default Cards;
