import React from 'react';
import { Link } from 'react-router-dom';

const Main_Info_Kyc = () => {
  return (
    <>
         <div>
            <h6 className='font-family theme-color'>ISSUING COUNTRY/REGION</h6>
            <select class="form-select bg-dark p-3 text-white" aria-label="Default select example">
                <option selected>Select Country</option>
                <option value="1">United State</option>
                <option value="2">United Arab Estate</option>
                <option value="3">London</option>
                <option value="3">Japan</option>
                <option value="3">China</option>
            </select>
         </div>
         <div className='mt-5'>
            <h6 className='font-family theme-color'>SELECT IDENTITY TYPE</h6>
            <p className='text-secondary'>Should be your government issued photo identity</p>
           
            <div className='bg-dark p-3 my-3 rounded-3 d-flex align-items-center '>
                <div className='w-50 d-flex align-items-center'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="ms-3 form-check-label text-white font-family" for="flexRadioDefault1">
                        National I'D
                    </label>
                </div>
                <div className='w-50 text-end'>
                    <i className='material-icons text-white'>library_books</i>
                </div>
            </div>
            <div className='bg-dark p-3 my-3 rounded-3 d-flex align-items-center '>
                <div className='w-50 d-flex align-items-center'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                    <label class="ms-3 form-check-label text-white font-family" for="flexRadioDefault3">
                        Passport
                    </label>
                </div>
                <div className='w-50 text-end'>
                    <i className='material-icons text-white'>menu_book</i>
                </div>
            </div>
            <div className='bg-dark p-3 my-3 rounded-3 d-flex align-items-center '>
                <div className='w-50 d-flex align-items-center'>
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                    <label class="ms-3 form-check-label text-white font-family" for="flexRadioDefault2">
                        Driver's License
                    </label>
                </div>
                <div className='w-50 text-end'>
                    <i className='material-icons text-white'>description</i>
                </div>
            </div>
            <Link to='/Kyc/step_2' className='btn btn-primary btn-lg fs-6 font-family'>Next Step</Link>
         </div>
    </>
  );
}

export default Main_Info_Kyc;
