import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../section-components/ConnectWalletModal';


const Navbar = () => {
  window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    console.log(scrollValue); 
    if (scrollValue > 80) {
      let navbar = document.getElementById('navbar');
      navbar.classList.add('back-blur', 'sticky-top', 'animate');
    } else {
      let navbar = document.getElementById('navbar');
      navbar.classList.remove('back-blur', 'sticky-top');
      navbar.classList.add('animate');
    }
  });
  return (
    <>
      <nav id='navbar' className="navbar py-3 navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">LaunchedPad</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-4">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item ms-4">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#roadmap">RoadMap</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#tiers">Tiers</a>
              </li>
              <li className="nav-item ms-4">
                <a className="nav-link" href="#partners">Partners</a>
              </li>
             
              <li className="nav-item dropdown ms-4">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others Page
                </a>
                <ul className="dropdown-menu mt-3 px-2" aria-labelledby="navbarDropdown">
                  <li><Link className="nav-link" to="/farming">Farming</Link></li>
                  <li><Link className="nav-link" to="/apply_projects">Apply</Link></li>
                  <li><Link className="nav-link" to="/calender">Calender</Link></li>
                  <li><Link className="nav-link" to="/claim">Claim</Link></li>
                  <li><Link className="nav-link" to="/staking">Stake</Link></li>
                  <li><hr className=" bg-white" /></li>
                  <li><Link className="nav-link" to="/Kyc">KYC</Link></li>
                  <li><Link className="nav-link" to="/Kyc">Pool</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-primary rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Connect Wallet</button>
            </form>
          </div>
        </div>
      </nav>


      {/* connect wallet modal */}
      <ConnectWalletModal/>


    </>
  );
}

export default Navbar;
