import React from 'react';
import img1 from '../../assets/img/gre1.svg';
import img2 from '../../assets/img/gre2.svg';
import img3 from '../../assets/img/gre3.svg';



const RoadMap = () => {
  return (
    <>
        <div className='row my-5'>
            <figcaption figcaption class="blockquote-footer mt-5 text-white mb-0 pb-0">
                ROADMAPS
            </figcaption>
            <h1 className='theme-color font-family  mb-3' style={{fontSize: '50px'}}>RoadMap</h1>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img1} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q1 2024</h4>
                        <p className='text-white py-0 my-0'>Launch on GamFi</p>
                        <p className='text-white py-0 my-0'>Seed round</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img2} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q2 2024</h4>
                        <p className='text-white py-0 my-0'>DAO Maker & Red Kite</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img3} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q3 2024</h4>
                        <p className='text-white py-0 my-0'>Launch on GamFi</p>
                        <p className='text-white py-0 my-0'>Seed round</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img1} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q4 2024</h4>
                        <p className='text-white py-0 my-0'>Launch on GamFi</p>
                        <p className='text-white py-0 my-0'>Seed round</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img2} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q5 2024</h4>
                        <p className='text-white py-0 my-0'>Launch on GamFi</p>
                        <p className='text-white py-0 my-0'>Seed round</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={img3} width='50'/>
                    <div className='ms-3'>
                        <h4 className='theme-color font-family'>Q6 2024</h4>
                        <p className='text-white py-0 my-0'>Launch on GamFi</p>
                        <p className='text-white py-0 my-0'>Seed round</p>
                        <p className='text-white py-0 my-0'>Listing on CEX</p>
                        <p className='text-white py-0 my-0'>Development of NFT Marketplace</p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  );
}


export default RoadMap;
