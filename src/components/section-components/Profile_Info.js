import React from 'react';
import cover_img from '../../assets/img/img5.jpg';
import profile_img from '../../assets/img/img11.jpg';

const Profile_Info = () => {
  return (
    <>
        <div className='shadow-round rounded-circle' style={{top: '700px', left: '50px'}}></div>
        <div className='shadow-round rounded-circle' style={{top: '200px', right: '50px'}}></div>
         <div>
            <div id='main-section' className='m-3'>
                <div className='cover-image' style={{backgroundImage: `url(${cover_img})`}}></div>
           
                <div className='container '>
                    <div className='row mx-0' style={{marginTop: '-100px'}}>
                            <div className='profile-dp-info'>
                                <img src={profile_img} className='profile-img'/>
                            </div>
                        <div className='col-md-6  my-3'>
                            <div className='d-flex '>
                                <div className=' w-50'>
                                    <h3 className='text-white'>Syed Basit</h3>
                                    <h6 className='text-secondary p-0 m-0'>Product Designer@google</h6>

                                    <div className='p-2 w-100 location-bedge mt-3'>
                                        <h6 className='p-0 m-0 d-flex align-items-center '> 
                                        <i className='material-icons '>location_on</i> London United Kingdom</h6>
                                    </div>

                                    {/* <div className='my-4 d-flex align-items-center'>
                                        <i className='material-icons share-link p-2 ms-2 rounded-3'>share</i>
                                        <i className='material-icons share-link p-2 ms-2 rounded-3'>link</i>
                                        <button className='btn btn-outline-primary d-flex align-items-center rounded-3 ms-3 px-4 text-white py-2'> edit profile</button>
                                    </div> */}
                                </div>
                                <div className=' w-50  text-end '>
                                    <button className='btn btn-outline-light rounded-3 ms-3  py-2'> Follow</button>
                                </div>
                            </div>
                            <div className='d-flex my-4 align-items-center justify-content-between'>
                                <div>
                                    <h3 className='p-0 m-0 text-white'>$17.3k</h3>
                                    <h6 className='p-0 m-0 theme-color d-flex align-items-center'>
                                    <i className='material-icons'>person</i>Total Sales</h6>
                                </div>
                                <div>
                                    <h3 className='p-0 m-0 text-white'>$1.3k</h3>
                                    <h6 className='p-0 m-0 theme-color d-flex align-items-center'>
                                    <i className='material-icons'>person</i> Following</h6>
                                </div>
                                <div>
                                    <h3 className='p-0 m-0 text-white'>$156.3k</h3>
                                    <h6 className='p-0 m-0 theme-color d-flex align-items-center'>
                                    <i className='material-icons'>person</i> Total Sales</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <figcaption figcaption class="mt-4  font-family blockquote-footer theme-color mb-0 pb-0">
                                BIO
                            </figcaption>
                            <p className='text-secondary'>
                            Get ready with ou IDO & INO, we bring your project to raise funds and investors. Get ready with ou IDO & INO, we bring your project to raise funds and investors. Get ready with ou IDO & INO, we bring your project to raise funds and investors.
                            </p>
                            {/* Social links  */}
                            <div>
                                <figcaption figcaption class="mt-4  font-family blockquote-footer theme-color mb-0 pb-0">
                                    LINKS
                                </figcaption>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <i className='material-icons text-warning'>language</i>
                                        <a href='#' className='text-warning mx-0 ms-2 text-decoration-none'>www.facebook.com</a>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <i className='material-icons text-warning'>attach_file</i>
                                        <a href='#' className='text-warning mx-0 ms-2 text-decoration-none'>www.twitter.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div className='shadow-round rounded-circle' style={{top: '1200px', right: '50px'}}></div>

    </>
  );
}

export default Profile_Info;
