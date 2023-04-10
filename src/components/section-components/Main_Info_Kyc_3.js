import React from 'react';
import { Link } from 'react-router-dom';

const Main_Info_Kyc_3 = () => {
  return (
    <>
        <div>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="text-white font-family form-label">FIRST NAME</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="text-white font-family form-label">LAST NAME</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-12">
                <label for="inputAddress" class="text-white font-family form-label">STATE/PROVIENCE</label>
                <input type="text" class="form-control bg-dark text-white p-2" placeholder="1234 Main St" />
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="text-white font-family form-label">ADDRESS LINE 1</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="text-white font-family form-label">ADDRESS LINE 2</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="text-white font-family form-label">CITY</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="text-white font-family form-label">POST CODE</label>
                <input type="text" class="form-control bg-dark text-white p-2" />
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label text-white" for="gridCheck">
                    I accept the Term of <Link to='/terms_condition' className='text-primary text-decoration-none'>Conditions</Link> and 
                     <Link to='/privacy' className='text-primary text-decoration-none'>Privacy Policy</Link>
                    </label>
                </div>
            </div>
            <div class="col-12">
                <button className='btn btn-primary btn-lg fs-6 font-family'>Submit KFV</button>
            </div>
        </form>
        </div> 
    </>
  );
}

export default Main_Info_Kyc_3;
