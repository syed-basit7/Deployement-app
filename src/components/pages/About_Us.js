import React from 'react';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import About_Banner from '../section-components/About_Banner';
import About_Section_2 from '../section-components/About_Section_2';
import About_Section_3 from '../section-components/About_Section_3';
import About_Section_4 from '../section-components/About_Section_4';
import Investors_Count from '../section-components/Investors_Count';

const About_Us = () => {
  return (
    <>
        <Navbar/>
        <About_Banner/>
        <About_Section_2/>
        <About_Section_3/>
        <About_Section_4/>
        <Footer/>
        <div className='shadow-round rounded-circle' style={{top: '2500px', right: '50px'}}></div>
    </>
  );
}

export default About_Us;
