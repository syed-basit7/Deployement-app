import React from 'react';
import Navbar from '../global-components/Navbar';
import blog_img from '../../assets/img/about4.png';
import img1 from '../../assets/img/img4.jpg';
import img2 from '../../assets/img/img5.jpg';
import img3 from '../../assets/img/img6.jpg';
import img4 from '../../assets/img/img7.jpg';
import Farming_List_Card from '../section-components/Farming_List_Card';
import Footer from '../global-components/Footer';
import rocket2 from '../../assets/img/rocket2.png';


const Farming = () => {
  return (
    <>
        <Navbar/>
        <div>
            <div className='about-banner m-4'>
                <div className='container py-3'>
                    <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                    <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                    <div className='row'>
                        <div className='col-lg-6 my-3 p-0 d-flex align-items-center'>
                            <div>
                                <figcaption class="blockquote-footer theme-color">
                                    FARMING
                                </figcaption>
                                <h1 className='p-0 m-0 main-text font-family theme-color'><span className='text-white'> Launched</span> FARMING </h1>
                                <p className='p-0 m-0 text-white lead mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers. </p>
                            </div>
                        </div>
                        <div className='col-lg-6 my-3 text-center'>
                            <img src={blog_img} width={'500'}/>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
            <div className='container'>
                <div className='tabs  py-3  my-4 d-flex align-items-center justify-content-between'>
                    <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>Active
                    <span className='badge ms-2 bg-success p'>62</span> </a>
                    <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>In Active
                    <span className='badge ms-2 bg-primary p'>152</span></a>
                    <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>In Active
                    <span className='badge ms-2 bg-primary p'>152</span></a>
                </div>

                <div className='d-flex text-white align-content-center justify-content-between'>
                    <h6 style={{minWidth: '250px'}} className=''>POOLS</h6>
                    <h6>APY</h6>
                    <h6>STAKED</h6>
                    <h6>TEARNED</h6>
                    <h6>TOTAL VALUE LOCKED</h6>
                </div>

                <div className='my-3'>
                   <Farming_List_Card open_close='true' img1={img2} title='BEST-DOT / BEST' img2={img1}/>
                </div>
                <div className='my-3'>
                   <Farming_List_Card open_close='false' img1={img3} title='ACT-BNB / ACT' img2={img4}/>
                </div>
                <div className='my-3'>
                   <Farming_List_Card open_close='false' img1={img1} title=' MFT-AVAX / MFT' img2={img3}/>
                </div>
                <div className='my-3'>
                   <Farming_List_Card open_close='false' img1={img2} title='AAVE-BNB / AAVE' img2={img4}/>
                </div>
            </div>
            <div className='container' style={{marginTop: '150px'}}>
                <div className='row'>
                    <div className='col-lg-9'>
                        <h1 className='font-family text-white'>Start your project on <span className='theme-color'>DAOStarter</span> </h1>
                        <p className='text-secondary'>Get ready with ou IDO & INO,  we bring your project to raise   funds and investors. Get ready with ou IDO & INO,  we bring your project to raise   funds and investors. Get ready with ou IDO & INO,  we bring your project to raise   funds and investors.</p>
                        <button className="btn btn-primary rounded-pill px-5 mt-3 btn-lg" type="submit">Apply Now</button>
                    </div>
                    <div className='col-lg-3'>
                        <img src={rocket2} width={'300'}/>
                    </div>
                </div>
            </div> 
            <div className='shadow-round rounded-circle' style={{top: '1500px', right: '50px'}}></div>
            <div className='mt-5'>
                <Footer/>
            </div>
       
    </>
  );
}

export default Farming;
