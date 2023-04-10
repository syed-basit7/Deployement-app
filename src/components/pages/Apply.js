import React from 'react';
import rocket_img from '../../assets/img/about4.png';
import Navbar from '../global-components/Navbar';
import Footer from '../global-components/Footer';


const Apply = () => {
  return (
    <>
        <Navbar/>
        <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '800px', left: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '1200px', right: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '1700px', left: '50px'}}></div>
        <div className='px-5 my-3'>
            <div id='terms-banner' className='px-5'>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='mt-5 pt-4'>
                        <h1 style={{fontSize: '55px'}} className='theme-color font-family'><span className='text-white'> LounchedPad </span>Apply Projects</h1>
                        <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                            APPLY FOR PROJECTS
                        </figcaption>
                    </div>
                </div>
            </div>
        </div> 
        <div className='container my-5 '>
            <div className='row'>
                <h4 className='font-family mb-4 theme-color'>APPLY FOR PROJECTS</h4>
                <div className='col-md-8'>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="text-white font-family form-label">Project Name</label>
                            <input type="text" class="form-control bg-dark text-white p-2" placeholder='Project Name'/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="text-white font-family form-label">Email Adddress</label>
                            <input type="text" class="form-control bg-dark text-white p-2" placeholder='Enter Email'/>
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="text-white font-family form-label">Project Brief</label>
                            <textarea class="form-control bg-dark text-white" rows={8} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        </div>

                        <h5 className='theme-color font-family'>Blockchain/Platform</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label text-secondary" for="flexRadioDefault1">
                            Binance Smart Chain
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  checked />
                            <label class="form-check-label text-secondary" for="flexRadioDefault2">
                            Solana
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  />
                            <label class="form-check-label text-secondary" for="flexRadioDefault3">
                            Ethereum
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"  />
                            <label class="form-check-label text-secondary" for="flexRadioDefault4">
                            Polkadot
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"  />
                            <label class="form-check-label text-secondary" for="flexRadioDefault5">
                            Polygon (Matic)
                            </label>
                        </div>



                        <h5 className='theme-color font-family mt-4'>Project status</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault9" />
                            <label class="form-check-label text-secondary" for="flexRadioDefault9">
                            Just an initial idea
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6" checked />
                            <label class="form-check-label text-secondary" for="flexRadioDefault6">
                            Idea with White Paper
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault7"  />
                            <label class="form-check-label text-secondary" for="flexRadioDefault7">
                            In early development
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault8"  />
                            <label class="form-check-label text-secondary" for="flexRadioDefault8">
                            Ready to launch
                            </label>
                        </div>
                       

                        <div>
                            <h6 className='theme-color font-family mt-4'>TARGET RAISE</h6>
                            <input class="form-control bg-dark text-white p-2" placeholder='How much are you planing on raising on the IGO?' type="text"/>
                        </div>
                        <div>
                            <h6 className='theme-color font-family mt-4'>PROJECT WEBSITE / LINK TO WHITEPAPER</h6>
                            <input class="form-control bg-dark text-white p-2" placeholder='Enter Link' type="text"/>
                        </div>
                        <div>
                            <h6 className='theme-color font-family mt-4'>TELEGRAM GROUP</h6>
                            <input class="form-control bg-dark text-white p-2" placeholder='Enter Telegram group link' type="text"/>
                        </div>
                        <div>
                            <h6 className='theme-color font-family mt-4'>PROJECT TWITTER</h6>
                            <input class="form-control bg-dark text-white p-2" placeholder='Enter Project twitter account' type="text"/>
                        </div>
                        <div class="col-12">
                            <button className='btn btn-primary btn-lg fs-6 font-family'>Submit Project</button>
                        </div>
                    </form>
                </div>

                <div className='col-md-4 '>
                    <div>
                        <figcaption figcaption class="blockquote-footer theme-color fw-bold mb-0 pb-0">
                        HOW IT'S WORK ?
                        </figcaption>
                        <p className='text-secondary mt-2'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers.</p>
                    </div>
                    <div className='mt-5'>
                        <figcaption figcaption class="blockquote-footer theme-color fw-bold mb-0 pb-0">
                            WHEN REPLY ?
                        </figcaption>
                        <p className='text-secondary mt-2'>Welcome to our website! We are a company that specializes in providing high-quality products and services to our customers.</p>
                    </div>
                </div>
            </div>
        </div> 

        <Footer/>
    </>
  );
}

export default Apply;
