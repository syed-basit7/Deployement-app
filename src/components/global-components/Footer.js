import React from 'react';

const Footer = () => {
  return (
    <>
  
    <div className='rounded-0 footer-back '>
        <div class="container px-4 py-5">
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              </div>
              <div>
                <figcaption figcaption class="blockquote-footer fs-5 text-white mb-0 pb-0">
                      LAUNCHED WBB3.0
                </figcaption>
                <p className='text-secondary mt-4'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              </div>
              <div>
                <figcaption figcaption class="blockquote-footer fs-5  text-white mb-0 pb-0">
                      SITE LINK
                </figcaption>
                <ul class="list-item ">
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>Home</a>
                  </li>
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>About</a>
                  </li>
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>Pool</a>
                  </li>
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>Profile</a>
                  </li>
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>Privacy Policy</a>
                  </li>
                  <li class="list-item my-2">
                    <a href='#' className='text-decoration-none theme-color'>Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
              </div>
              <div>
                <figcaption figcaption class="blockquote-footer fs-5 text-white mb-0 pb-0">
                      Signup to Laounched WEB3.0
                </figcaption>
                <div class="my-4">
                  <input type="email" class="bg-dark form-control" />
                  <button className="btn btn-primary px-5 mt-3 btn-sm" type="submit">Sign up</button>
                </div>
              </div>
            </div>
          </div>
            <hr className='bg-secondary'/>
          <div className='w-100 d-flex align-items-center'>
            <div className='w-50 text-start'>
              <p className='p-0 m-0 text-secondary'>2023 LaounchedPad All right reserved.</p>
            </div>
            <div className='w-50 text-end'>
                <i className='material-icons text-white mx-2'>language</i>
                <i className='material-icons text-white mx-2'>mail</i>
                <i className='material-icons text-white mx-2'>send</i>
            </div>
          </div>
        </div> 
    </div>

    </>
  );
}

export default Footer;
