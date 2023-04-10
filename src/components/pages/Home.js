import React from 'react';

import img1 from '../../assets/img/img13.jpg';
import img2 from '../../assets/img/img10.jpg';
import img3 from '../../assets/img/img9.jpg';
import img4 from '../../assets/img/img4.jpg';
import img5 from '../../assets/img/img5.jpg';
import img6 from '../../assets/img/img7.jpg';
import img7 from '../../assets/img/img3.jpg';
import img8 from '../../assets/img/img4.jpg';
import img9 from '../../assets/img/img11.jpg';
import img10 from '../../assets/img/img11.jpg';

import part1 from '../../assets/img/part1.png';
import part2 from '../../assets/img/part3.png';
import part3 from '../../assets/img/part4.png';
import part4 from '../../assets/img/part6.png';
import rocket2 from '../../assets/img/rocket2.png';

import Navbar from '../global-components/Navbar';
import Hero_Banner from '../section-components/Hero_Banner';
import Cards from '../section-components/Cards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shadow_Card from '../section-components/Shadow_Card';
import Small_Cards from '../section-components/Small_Cards';
import RoadMap from '../section-components/RoadMap';
import Footer from '../global-components/Footer';
import Tires from '../section-components/Tires';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
       <Navbar/>
      <Hero_Banner/>
      <div className='container my-5'>
        <div id='slider' className='slider'>
          <Slider {...settings}>
            <Small_Cards img={img1} name='NUMERIC'/>
            <Small_Cards img={img2} name='AHSAN'/>
            <Small_Cards img={img3} name='SYED BASIT'/>
            <Small_Cards img={img4} name='SYED NASIR'/>
            <Small_Cards img={img5} name='SYED MAAZ'/>
          </Slider>
        </div>
          <div className='shadow-round rounded-circle' style={{top: '1150px', right: '50px'}}></div>

        <div className='row ' style={{marginTop: '150px'}}>
          <div className='mb-5'>
            <figcaption figcaption class="blockquote-footer text-white mb-0 pb-0">
                LET'S FLY WITH US
            </figcaption>
            <h2 className='theme-color font-family p-0 m-0'><span className='text-warning'> UPCOMING</span> PROJECTS <span className='begde bg-dark rounded-pill px-4 fs-4 py-1'>6</span> </h2>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img1}/>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img3}/>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img6}/>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img7}/>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img8}/>
          </div>
          <div className='col-lg-4 my-3'>
              <Cards img={img9}/>
          </div>
        </div>

      </div>
        {/* partnsers */}

        <div className='partners-bg py-5' id='partners' style={{marginTop: '150px'}}>
          <div className='container'>
              <div className='d-flex align-items-center'>
                <div>
                  <figcaption figcaption class="blockquote-footer text-white mb-0 pb-0">
                      OUR PARTMNERS
                  </figcaption>
                  <h2 className='theme-color font-family p-0 m-0'>PARTNERS</h2>
                </div>
              </div>
              <Slider {...settings} className='mt-5'>
                <img src={part2} className='mx-5' width={'20'} height={'100'} />
                <img src={part3} className='mx-5' width={'20'} height={'100'} />
                <img src={part4} className='mx-5' width={'20'} height={'100'} />
                <img src={part2} className='mx-5' width={'20'} height={'100'} />
                <img src={part1} className='mx-5' width={'20'} height={'100'} />

              </Slider>
          </div>
          <div className='shadow-round rounded-circle' style={{top: '2000px', left: '50px'}}></div>
        </div>

        <div className='container' id='roadmap' style={{marginTop: '150px'}}>
            <RoadMap/>
        </div>

        <div className='container' id='tiers' style={{marginTop: '150px'}}>
          <figcaption figcaption class="blockquote-footer text-white mb-0 pb-0">
                LAUNCHED TIERS
          </figcaption>
          <h1 className='theme-color font-family'>Launchpad Tiers</h1>
          <p className='text-secondary'>TrustFi team members are seasoned professionals with rich experiences across blockchain, finance and business, and committed to building DeFi infrastructures of Web 3.0.</p>
          <div className='row'>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
            <div className='col-md-4 my-3'>
                <Tires/>
            </div>
          </div>
        </div>

        {/* multi box shadow section */}
        <div className='container'  style={{marginTop: '150px'}}>
            <div className='text-center'>
                <figcaption figcaption class="blockquote-footer text-white mb-0 pb-0">
                      OUR SECURE
                </figcaption>
              <h3 className='theme-color font-family my-3'>Your Trusted & Secure Crypto <br />Lounched Plateform </h3>
              <p className='text-secondary'>Get ready with ou IDO & INO,  we bring your project to raise  <br/> funds and investors.</p>
            </div>
            <div className='row g-5'>
              <div className='col-lg-4'>
                  <Shadow_Card title='Milti-type Sale Pool'/>
              </div>  
              <div className='col-lg-4'>
                  <Shadow_Card title='NFT&METAVERSE'/>
              </div>  
              <div className='col-lg-4'>
                  <Shadow_Card title='Tier Level'/>
              </div>  
            </div>
        </div>

        <div className='shadow-round rounded-circle' style={{top: '3000px', right: '50px'}}></div>

        <div className='container' style={{marginTop: '150px'}}>
          <div className='row'>
            <div className='col-lg-9 my-3'>
                <h1 className='font-family text-white'>Start your project on <span className='theme-color'>DAOStarter</span> </h1>
                <p className='text-secondary'>Get ready with ou IDO & INO,  we bring your project to raise   funds and investors. Get ready with ou IDO & INO,  we bring your project to raise   funds and investors. Get ready with ou IDO & INO,  we bring your project to raise   funds and investors.</p>
                <button className="btn btn-primary rounded-pill px-5 mt-3 btn-lg" type="submit">Apply Now</button>
            </div>
            <div className='col-lg-3 my-3 text-center'>
                <img src={rocket2} width={'300'}/>
            </div>
          </div>
        </div> 
    
          {/* thes is shadow */}
          <div className='shadow-round rounded-circle' style={{top: '3500', right: '50px'}}></div>
          <div className='shadow-round rounded-circle' style={{top: '4000px', left: '50px'}}></div>

        <Footer/>
    </>
  );
}

export default Home;
