import React from 'react';
import img from '../../assets/img/img1.jpg';
import { Link } from 'react-router-dom';


const StakeTab = (props) => {
  return (
    <>
        <div class="nft-card stake-tab p-4 my-3">
            
            <div className='d-flex align-items-center'>
                <div className='w-50'>   
                    <h6 class="card-title text-white font-family ">Lock duration</h6>
                </div>
                <div className='w-50 text-end'>   
                    <h6 class="card-title font-family theme-color">New Staking Pool</h6>
                </div>
            </div>
            <div class="my-4 d-flex justify-content-between">
                <button className='btn lead days-btn text-secondary p-4 py-3'>30 days</button>
                <button className='btn lead days-btn text-secondary p-4 py-3'>90 days</button>
                <button className='btn lead days-btn text-secondary p-4 py-3'>180 days</button>
                <button className='btn lead days-btn text-secondary p-4 py-3'>270 days</button>
            </div>
            <h5 className='text-white mt-4'>Your staked amount : 0 SFUND</h5>
            <div className='d-flex align-items-center'>
                <div className='w-50 my-3 border-end border-secondary text-white d-flex align-items-center'>
                    <h5 className='w-50'>APY Rate :</h5>
                    <h5 className='w-50 text-end mx-2'>80%</h5>
                </div>
                <div className='w-50  text-white d-flex align-items-center'>
                    <h5 className='w-50 ms-4'>Maturity Date</h5>
                    <h5 className='w-50 text-end mx-2'></h5>
                </div>
            </div>
            <h5 className='text-white mt-2'>Balance : 0.0000 SFUND</h5>
            <div className='text-start'>
                <button className='btn py-3 mt-4  font-family staking-btn'>Approve</button>
            </div>
        </div>
    </>
  );
}

export default StakeTab;
