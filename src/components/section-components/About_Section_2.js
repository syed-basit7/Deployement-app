import React from 'react';
import rocket_img from '../../assets/img/about2.png';
import Investors_Count from './Investors_Count';


const About_Section_2 = () => {
  return (
    <>
        <div className='my-5'>
            <div className='container'>
                <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                <div className='row py-5'>
                <div className='col-lg-6'>
                        <img src={rocket_img} width={'500'}/>
                    </div>
                    <div className='col-lg-6 p-0 d-flex align-items-center'>
                        <div>
                            <figcaption class=" blockquote-footer text-white">
                                WHY CHOOSE ?
                            </figcaption>
                            <h1 className='p-0 m-0 font-family theme-color'>Why We Choose Us ? </h1>
                            <p className='p-0 m-0 text-secondary  mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers products and services to our customers. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 
    </>
  );
}

export default About_Section_2;
