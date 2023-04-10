import React from 'react';
import rocket_img from '../../assets/img/about1.png';

const About_Banner = () => {
  return (
    <>
        <div className='about-banner m-4'>
            <div className='container'>
                <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                <div className='row'>
                    
                    <div className='col-lg-6 my-3  p-0 d-flex align-items-center'>
                        <div>
                            <figcaption class="blockquote-footer theme-color">
                                About Us
                            </figcaption>
                            <h1 className='p-0 m-0 main-text font-family theme-color'>Raise capital For <br /> your  project <span className='text-white'>through <br/>Blockchain</span> </h1>
                            <p className='p-0 m-0 text-white lead mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers. </p>
                        </div>
                    </div>
                    <div className='col-lg-6 my-3 text-center'>
                        <img src={rocket_img} width={'500'}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default About_Banner;
