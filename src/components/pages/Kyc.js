import React from 'react';
import Navbar from '../global-components/Navbar';
import rocket_img from '../../assets/img/about1.png';
import Main_Info_Kyc from '../section-components/Main_Info_Kyc';
import Main_Info_Kyc_2 from '../section-components/Main_Info_Kyc_2';
import Main_Info_Kyc_3 from '../section-components/Main_Info_Kyc_3';
import Footer from '../global-components/Footer';
import { Link , Outlet } from 'react-router-dom';


const Kyc = () => {
  return (
    <>
      <Navbar/>
      <div className='about-banner m-4'>
            <div className='container'>
                <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                <div className='row'>
                    <div className='col-lg-6 p-0 d-flex align-items-center my-3'>
                        <div>
                            <figcaption class="blockquote-footer theme-color">
                                SUBMIT KYC
                            </figcaption>
                            <h1 className='p-0 m-0 font-family theme-color'>Submit <span className='text-white'>KYC</span> </h1>
                            <p className='p-0 m-0 text-white lead mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers. </p>
                        </div>
                    </div>
                    <div className='col-lg-6 text-end  my-3'>
                        <img src={rocket_img} width={'300'}/>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6 my-3'>
                {/* ther are KYC steps  */}
                    <Outlet/>
                </div>
                <div className='col-md-6 px-5  d-flex justify-content-end'>
                    <div style={{position: 'sticky', top: '100px'}} className=' rounded-3'>
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
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  );
}

export default Kyc;
