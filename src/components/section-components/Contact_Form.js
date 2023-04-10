import React from 'react';

const Contact_Form = () => {
  return (
    <>
         <div class="row g-3">
            <div class="col-md-6">
                <input type="text" class="form-control bg-dark" placeholder="Email" aria-label="First name" />
            </div>
            <div class="col-md-6">
                <input type="text" class="form-control bg-dark" placeholder="Name" aria-label="Last name" />
            </div>
            <div class="col-md-12">
                <textarea class="form-control bg-dark" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='d-flex justify-content-start'>
                <button className="btn btn-primary fs-6  mt-1 btn-lg" type="submit">Submit</button>
            </div>
        </div>
    </>
  );
}

export default Contact_Form;
