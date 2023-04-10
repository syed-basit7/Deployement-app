import './assets/css/style.css';
import Home from './components/pages/Home';
import Terms_Conditions from './components/pages/Terms_Conditions';
import Terms_Privacy from './components/pages/Terms_Privacy';
import Profile from './components/pages/Profile';
import About_Us from './components/pages/About_Us';
import Blog from './components/pages/Blog';
import Calendar from 'react-big-calendar/lib/Calendar';
import Calender_Page from './components/pages/Calender_Page';
import Kyc from './components/pages/Kyc';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_Info_Kyc_2 from './components/section-components/Main_Info_Kyc_2';
import Main_Info_Kyc_3 from './components/section-components/Main_Info_Kyc_3';
import Main_Info_Kyc from './components/section-components/Main_Info_Kyc';
import Apply from './components/pages/Apply';
import Farming from './components/pages/Farming';
import Claim from './components/pages/Claim';
import Staking from './components/pages/Staking';
import StakeTab from './components/section-components/StakeTab';
import StakingFarm from './components/section-components/StakingFarm';
import StakingClose from './components/section-components/StakingClose';



function App() {
 
  return (
    <>
      
      {/* <About_Us/> */}
      {/* <Blog/> */}
      {/* <Profile/> */}
      {/* <Terms_Privacy/> */}
      {/* <Terms_Conditions/> */}
      {/* <Calender_Page/> */}
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/claim' element={ <Claim/>} />
              
              <Route path='/staking' element={<Staking/>} >
                <Route path='' element={ <StakeTab/> }/>
                <Route path='stakingfarm' element={ <StakingFarm/> }/>
                <Route path='stakingclose' element={ <StakingClose/> }/>
              </Route>

              <Route path='/about' element={<About_Us />} />
              <Route path='/blogs' element={<Blog />} />
              <Route path='/apply_projects' element={<Apply/>} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/farming' element={<Farming/> } />
              <Route path='/privacy' element={<Terms_Privacy />} />
              <Route path='/terms_condition' element={<Terms_Conditions />} />
              <Route path='/calender' element={<Calender_Page />} />
              <Route path='/Kyc/' element={<Kyc />} >
                <Route path='' element={ <Main_Info_Kyc/> }/>
                <Route path='step_2' element={ <Main_Info_Kyc_2/> }/>
                <Route path='step_3' element={ <Main_Info_Kyc_3/> }/>
              </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
