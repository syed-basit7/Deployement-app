import React from 'react';
import trading from '../../assets/img/trading.png';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import StakeTab from '../section-components/StakeTab';
import StakingFarm from '../section-components/StakingFarm';
import StakingClose from '../section-components/StakingClose';
import { Link , Outlet } from 'react-router-dom';


const Staking = () => {
  return (
    <>
        <Navbar/>
        <div className='about-banner m-4'>
            <div className='container py-4'>
                <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                <div className='row'>
                    
                    <div className='col-lg-8 my-3 p-0 d-flex align-items-center'>
                        <div>
                            <figcaption class="blockquote-footer theme-color">
                                About Us
                            </figcaption>
                            <h1 className='p-0 m-0 main-text font-family text-white'> <span className='theme-color'>Stake</span> OR <span className='theme-color'>farm</span> <br/>
                            your SFUND to  join gaming  <span className='theme-color'>IGOs</span>  </h1>
                            <p className='p-0 m-0 text-white lead mt-3 mb-1'>And Get Free Tokens from Incubated Projects <span className='theme-color'> ( Seed Staking )</span></p>
                        </div>
                    </div>
                    <div className='col-lg-4 my-3 text-center'>
                        <img src={trading} width={450} />
                    </div>
                </div>
            </div>
        </div> 
        <div className='my-5 container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <button className='btn py-3 my-3 font-family staking-btn'>Buy On Pancakeswap</button>
                        <button className='btn py-3 my-3 font-family staking-btn'>Buy On KuCoin</button>
                        <button className='btn py-3 my-3 font-family staking-btn'>Buy On Gote.Io</button>
                        <button className='btn py-3 my-3 font-family staking-btn'>Buy On Bybut</button>
                        <button className='btn py-3 my-3 font-family staking-btn'>Buy On Huabi</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div id='stak-tabs' className='py-3 d-flex align-items-center justify-content-around'>
                        <Link to='' className='active-tabs p-2 px-3 rounded-3 text-decoration-none font-family theme-color fs-1 tabs-link'>Stake</Link>
                        <Link to='/staking/stakingfarm' className='text-decoration-none font-family theme-color fs-1 tabs-link'>Farm</Link>
                        <Link to='/staking/stakingclose' className='text-decoration-none font-family theme-color fs-1 tabs-link'>Close</Link>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
        <div className='shadow-round rounded-circle' style={{top: '1200px', right: '50px'}}></div>
        <Footer/>
    </>
  );
}

export default Staking;
