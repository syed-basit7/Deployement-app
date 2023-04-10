import React from 'react';
import { Link , Outlet } from 'react-router-dom';

const Main_Info_Kyc_2 = () => {
  return (
    <>
        <div>
            <h6 className='text-white font-family theme-color'>UPLOAD DOCUMENTS</h6>
            <div className='d-flex align-items-center w-100 justify-content-between my-4'>
                <div className='text-center'>
                    <div className='bg-dark p-4 rounded-3'>
                        <div className='upload-img border border-secondary py-3 p-1 rounded-3'>
                            <i className='material-icons text-white fs-1'>backup</i>
                        </div>
                    </div>
                    <p className='font-family mt-2 text-white'>National ID Front</p>
                </div>
                <div className='text-center'>
                    <div className='bg-dark p-4 rounded-3'>
                    <input type='hidden'/>
                        <div className='upload-img border border-secondary py-3 p-1 rounded-3'>
                            <i className='material-icons text-white fs-1'>backup</i>
                        </div>
                    </div>
                    <p className='font-family mt-2 text-white'>National ID Back</p>
                </div>
                <div className='text-center'>
                    <div className='bg-dark p-4 rounded-3'>
                        <div className='upload-img border border-secondary py-3 p-1 rounded-3'>
                            <i className='material-icons text-white fs-1'>backup</i>
                        </div>
                    </div>
                    <p className='font-family mt-2 text-white'>Selfie with National ID</p>
                </div>
            </div>
            <div className='border rounded-3 border-secondary p-4 py-3'>
                <div className='d-flex align-items-center my-3'>
                    <i className='material-icons text-end text-secondary'>checked</i>
                    <p className='text-secondary  p-0 m-0'>File accepted: JPEG/JPS/PNG (Max size: 250 KB)</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <i className='material-icons text-end text-success'>checked</i>
                    <p className='text-white  p-0 m-0'>Document should be good condition</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <i className='material-icons text-end text-secondary'>checked</i>
                    <p className='text-secondary  p-0 m-0'>Document must be valid period</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <i className='material-icons text-end text-secondary'>checked</i>
                    <p className='text-secondary  p-0 m-0'>Face must be clear visible</p>
                </div>
                <div className='d-flex align-items-center my-3'>
                    <i className='material-icons text-end text-secondary'>checked</i>
                    <p className='text-secondary  p-0 m-0'>Not has today’s date</p>
                </div>
            </div>

            <div className='mt-5'>
                <h6 className='text-white font-family theme-color'>NATIONAL ID NUMBER</h6>
                <input type='text' placeholder='e.g 422-0636464-31' className='form-control bg-dark text-white mt-3'/>
            </div>
            <Link to='/Kyc/step_3' className='btn btn-primary btn-lg fs-6 mt-3 font-family'>Next Step</Link>

        </div> 
    </>
  );
}

export default Main_Info_Kyc_2;
