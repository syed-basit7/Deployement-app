import React from 'react';
import Navbar from '../global-components/Navbar';
import Cards from '../section-components/Cards';
import Profile_Info from '../section-components/Profile_Info';

import img6 from '../../assets/img/img7.jpg';
import img7 from '../../assets/img/img3.jpg';
import img8 from '../../assets/img/img4.jpg';
import img9 from '../../assets/img/img11.jpg';
import img10 from '../../assets/img/img11.jpg';
import Activity_Card from '../section-components/Activity_Card';
import Footer from '../global-components/Footer';

const Profile = () => {
  return (
    <>
        <Navbar/>
        <Profile_Info/>
             {/* other links in profile page */}
        <div className='container'>
            <hr className='bg-secondary'/>
            <div className='my-4 d-flex align-items-center justify-content-between'>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>On Sale
                <span className='badge ms-2 bg-success p'>652</span> </a>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>Activity
                <span className='badge ms-2 bg-primary p'>652</span></a>
                <a href='#' className='text-secondary mx-0 ms-2 text-decoration-none'>Owned
                <span className='badge ms-2 bg-info p'>652</span></a>
            </div>
            <hr className='bg-secondary'/>

            <div className='row my-5'>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img10}/>
              </div>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img6}/>
              </div>
              <div className='col-md-4 my-3'>
                  <Activity_Card img={img7}/>
              </div>
            </div>
        </div>
        <Footer/>

      
    </>
  );
}

export default Profile;
