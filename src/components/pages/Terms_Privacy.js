import React from 'react';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';

const Terms_Privacy = () => {
  return (
    <>
      
       <Navbar/>
       <div className='shadow-round rounded-circle' style={{top: '500px', left: '50px'}}></div>
       <div className='px-5 my-5'>
            <div id='terms-banner' className='px-5'>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='mt-5 pt-4'>
                        <h1 style={{fontSize: '55px'}} className='theme-color font-family'><span className='text-white'> LounchedPad </span>Privacy Policy</h1>
                        <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                            Privacy Policy
                        </figcaption>
                    </div>
                </div>
            </div>
        </div> 

        <div className='container'>
          <h2 className='text-white'>Thise privacy policy help you better understand how we collect, use, and share you personal information.</h2>
          <figcaption figcaption class="mt-4 fs-3 font-family blockquote-footer theme-color mb-0 pb-0">
              Privacy Policy
          </figcaption>
          <p className='text-secondary mt-2'> This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the "Services"). As used in this Agreement, "JS-Solutions Networks" means JS-Solutions Networks Pte Ltd and "Client", "you", or "your" means you. You acknowledge that you have read the Agreement, and you agree to its terms and conditions and all policies posted on the JS-Solutions Networks site. As referred to in this Agreement, "Site" refers to a World Wide Web site and "JS-Solutions Networks Site" refers to the Site located at the URL https://www.js-solutions.com or any other successor Sites owned or maintained by JS-Solutions Networks.</p>
          <p className='text-secondary mt-3'> This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the "Services"). As used in this Agreement,</p>
          <p className='text-secondary mt-3'> This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the "Services"). </p>
          <figcaption figcaption class="mt-4 fs-3 font-family blockquote-footer theme-color mb-0 pb-0">
              Privacy Summary
          </figcaption>
          <h5 className='text-white fw-bold mt-2'>What Personal Information We Collect ?</h5>
          <p className='text-secondary mt-3'> This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the "Services"). As used in this Agreement, "JS-Solutions Networks" means JS-Solutions Networks Pte Ltd and "Client", "you", or "your" means you. You acknowledge that you have read the Agreement, and you agree to its terms and conditions and all policies posted on the JS-Solutions Networks site. As referred to in this Agreement, "Site" refers to a World Wide Web site and "JS-Solutions Networks Site" refers to the Site located at the URL https://www.js-solutions.com or any other successor Sites owned or maintained by JS-Solutions Networks.</p>
        </div>
        <div className='shadow-round rounded-circle' style={{top: '1000px', right: '50px'}}></div>
        <Footer/>
        <div className='shadow-round rounded-circle' style={{top: '1500px', left: '50px'}}></div>
    </>
  );
}

export default Terms_Privacy;
