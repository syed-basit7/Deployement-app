import React from 'react';
import Navbar from '../global-components/Navbar';
import blog_img from '../../assets/img/blog.png';
import Blog_Card from '../section-components/Blog_Card';
import cover_img from '../../assets/img/img5.jpg';
import cover_img1 from '../../assets/img/img11.jpg';
import cover_img2 from '../../assets/img/img12.jpg';
import cover_img3 from '../../assets/img/img13.jpg';
import cover_img4 from '../../assets/img/img6.jpg';
import Footer from '../global-components/Footer';


const Blog = () => {
  return (
    <>
        <Navbar/> 
        <div className='about-banner m-4'>
            <div className='container py-4'>
                <div className='shadow-round rounded-circle' style={{top: '650px'}}></div>
                <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
                <div className='row'>
                    
                    <div className='col-lg-6 my-3 p-0 d-flex align-items-center'>
                        <div>
                            <figcaption class="blockquote-footer theme-color">
                                OUR BLOGS
                            </figcaption>
                            <h1 className='p-0 m-0 main-text font-family theme-color'>Web flow Blog CMS <span className='text-white'>through <br/>Blockchain</span> </h1>
                            <p className='p-0 m-0 text-white lead mt-3 mb-1'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers. </p>
                        </div>
                    </div>
                    <div className='col-lg-6 my-3 text-center'>
                        <img src={blog_img} width={'500'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='shadow-round rounded-circle' style={{top: '1200px', right: '50px'}}></div>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6 my-3'>
                    <Blog_Card img={cover_img3} title='The WEB3.0 tips'/>
                </div>
                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img1} title='The More tips'/>
                </div>
                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img2} title='The More then tips'/>
                </div>

                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img1} title='The WEB3.0 tips'/>
                </div>
                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img} title='The More tips'/>
                </div>
                <div className='col-md-6 my-3'>
                    <Blog_Card img={cover_img4} title='The More then tips'/>
                </div>

                <div className='col-md-6 my-3'>
                    <Blog_Card img={cover_img3} title='The WEB3.0 tips'/>
                </div>
                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img1} title='The More tips'/>
                </div>
                <div className='col-md-3 my-3'>
                    <Blog_Card img={cover_img2} title='The More then tips'/>
                </div>
            </div>
        </div>
        <div className='shadow-round rounded-circle' style={{top: '1800px', left: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '2200px', right: '50px'}}></div>
        <Footer/>
    </>
  );
}

export default Blog;
