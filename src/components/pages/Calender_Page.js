import React from 'react';
import Footer from '../global-components/Footer';
import Navbar from '../global-components/Navbar';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import terms_img from '../../assets/img/terms.png';


function Calender_Page() {

  const events = [
    {
      start: new Date(2023, 3, 10, 10, 0),
      end: new Date(2023, 3, 10, 12, 0),
      title: 'Meeting with John',
    },
    {
      start: new Date(2023, 3, 15, 14, 0),
      end: new Date(2023, 3, 15, 15, 0),
      title: 'Call with Jane',
    },
    // ...
  ];
  const localizer = momentLocalizer(moment); // define the localizer variable here


  return (
    <>
            <div className='shadow-round rounded-circle' style={{top: '250px', right: '50px'}}></div>
            <div className='shadow-round rounded-circle' style={{top: '500px', left: '50px'}}></div>
            <div className='shadow-round rounded-circle' style={{top: '800px', right: '50px'}}></div>
      <Navbar />

      <div className='shadow-round rounded-circle' style={{top: '1900px'}}></div>
      <div className='px-5 my-3'>
            <div id='terms-banner' className='px-5'>
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center justify-content-center'>
                        <div>
                            <h1 className='theme-color font-family'><span className='text-white'> LounchedPad </span>IGO Calender</h1>
                            <figcaption figcaption class="mt-2 blockquote-footer text-white mb-0 pb-0">
                                IGO Calender
                            </figcaption>
                        </div>
                    </div>
                    <div className='col-md-4  text-center'>
                        <img src={terms_img} width={'250'}/>
                    </div>
                </div>
            </div>
        </div> 
      <div className='container my-5'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }} />
      </div>
      <Footer />
    </>
  );
}

export default Calender_Page;
