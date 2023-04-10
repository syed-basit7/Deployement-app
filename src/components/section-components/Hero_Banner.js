import React from 'react';
import rocket_img from '../../assets/img/rocket3.png';
import Back_Style from '../global-components/Back_Style';

const Hero_Banner = () => {
  return (
    <>
        <div className='container'>
        <div className='shadow-round rounded-circle' style={{top: '100px' , right:'50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '550px'}}></div>
            <div className='row'>
                <div className='col-lg-6 p-0 d-flex align-items-center'>
                    <div>
                        <figcaption class="blockquote-footer theme-color">
                            LET'S FLY WITH US
                        </figcaption>
                        <h1 className='p-0 m-0 main-text font-family theme-color'>Start a new era of <br /> encryptiom <span className='text-white'>to lounch <br/> based on Web 3.0</span> </h1>
                        <p className='p-0 m-0 text-white lead mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers. </p>
                        <button className="btn btn-primary rounded-pill px-4 mt-4" type="submit">View Pool</button>
                        <button className="btn btn-outline-primary ms-3 rounded-pill px-4 mt-4" type="submit">Litepaper</button>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={rocket_img} width={'600'}/>
                </div>
            </div>
        </div>
    </>
  );
}

export default Hero_Banner;
