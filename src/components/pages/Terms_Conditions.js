import React from 'react';
import Navbar from '../global-components/Navbar';

import terms_img from '../../assets/img/terms.png';
import Contact_Form from '../section-components/Contact_Form';
import Footer from '../global-components/Footer';

const Terms_Conditions = () => {
  return (
    <>
        <Navbar/>
        <div className='shadow-round rounded-circle' style={{top: '200px', right: '50px'}}></div>
        <div className='px-5 my-5'>
            <div id='terms-banner' className='px-5'>
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className='theme-color font-family'><span className='text-white'> LounchedPad </span>Terms & Conditions</h1>
                            <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                                Terms & Conditions
                            </figcaption>
                        </div>
                    </div>
                    <div className='col-md-4  text-center'>
                        <img src={terms_img} width={'250'}/>
                    </div>
                    
                </div>
            </div>
        </div> 
        <div className='container'>
            <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                Terms & Conditions
            </figcaption>
            <div className='mt-4'>
                <p className='text-secondary'>This Services Agreement (the "Agreement") contains the complete terms and conditions which govern your subscription of Website Design, Development and other Internet-related services provided by JS-Solutions Networks Pte Ltd (the "Services"). As used in this Agreement, "JS-Solutions Networks" means JS-Solutions Networks Pte Ltd and "Client", "you", or "your" means you. You acknowledge that you have read the Agreement, and you agree to its terms and conditions and all policies posted on the JS-Solutions Networks site. As referred to in this Agreement, "Site" refers to a World Wide Web site and "JS-Solutions Networks Site" refers to the Site located at the URL https://www.js-solutions.com or any other successor Sites owned or maintained by JS-Solutions Networks.</p>
                <figcaption figcaption class="mt-5 font-family blockquote-footer theme-color mb-0 pb-0">
                    Acceptance
                </figcaption>
                <p className='text-secondary'>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.
                    Please read these terms and conditions carefully. Any purchase or use of our services implies that you have read and accepted our terms and </p>
                <figcaption figcaption class="mt-5 font-family blockquote-footer theme-color mb-0 pb-0">
                Charges
                </figcaption>
                <p className='text-secondary'>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.
                    Please read these terms and conditions carefully. Any purchase. <br/> Or use of our services implies that you have read and accepted our terms . </p>
                    <figcaption figcaption class="mt-5 font-family blockquote-footer theme-color mb-0 pb-0">
                    Turnaround Time and Content Control
                </figcaption>
                <p className='text-secondary'>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.
                    Please read these terms and conditions carefully. Any purchase. <br/> Or use of our services implies that you have read and accepted our terms . </p>
                    <figcaption figcaption class="mt-5 font-family blockquote-footer theme-color mb-0 pb-0">
                    Failure to provide required website content:
                </figcaption>
                <p className='text-secondary'>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.
                    Please read these terms and conditions carefully. Any purchase. <br/> Or use of our services implies that you have read and accepted our terms . </p>
                <p className='mt-3 text-secondary'>It is not necessary for any Client to have signed an acceptance of these terms and conditions for them to apply. If a Client accepts a quote then the Client will be deemed to have satisfied themselves as to the terms applying and have accepted these terms and conditions in full.
                Please read these terms and conditions carefully. Any purchase.  </p>
            </div>
        </div>
            {/* <div className='form-bg'>
                <div className='mt-5 py-5 container'>
                    <figcaption figcaption class="mb-4 fs-4 blockquote-footer text-white mb-0 pb-0">
                        Contact Us
                    </figcaption>
                    <Contact_Form className='mt-5'/>
                </div>
            </div> */}
       
        <div className='shadow-round rounded-circle' style={{top: '500px', left: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '1000px', right: '50px'}}></div>
        <Footer/>
        <div className='shadow-round rounded-circle' style={{top: '1700px', left: '50px'}}></div>

    </>
  );
}

export default Terms_Conditions;
