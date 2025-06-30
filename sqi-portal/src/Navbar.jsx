import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />

      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-fluid" style={{paddingRight: '36px'}}>

          {/* Spacer to push everything to the right */}
          <div className="flex-grow-1"></div>

          {/* Info Section Container */}
          <div className="d-flex align-items-center" style={{gap: '24px'}}>
            
            {/* Level, Session, Department Group */}
            <div className="d-flex align-items-center" style={{gap: '24px'}}>
              {/* Level Info */}
              <div className="d-none d-lg-flex flex-column text-end">
                <span className="text-dark fw-bold">LEVEL 3 | S</span>
                <small className="text-muted">Level | Semester</small>
              </div>

              {/* Session Info */}
              <div className="d-none d-md-flex flex-column text-end">
                <span className="text-dark fw-bold">2024/2025</span>
                <small className="text-muted">Current Session</small>
              </div>

              {/* Department Info */}
              <div className="d-none d-lg-flex flex-column text-end">
                <span className="text-dark fw-bold">DSE-WDFS | PDC</span>
                <small className="text-muted">Dept | Programme</small>
              </div>
            </div>

            {/* Action Icons Group */}
            <div className="d-flex align-items-center iconGroup">
              {/* Question Mark Icon */}
              <button className="btn btn-link text-dark me-2 position-relative">
                <i className="fas fa-question-circle fs-5"></i>
              </button>

              {/* Message Icon */}
              <button className="btn btn-link text-dark me-2 position-relative">
                <i className="fas fa-envelope fs-5"></i>
              </button>

              {/* Bell Icon */}
              <button className="btn btn-link text-dark me-3 position-relative">
                <i className="fas fa-bell fs-5"></i>
              </button>
            </div>

            {/* Profile Section */}
            <div className="dropdown">
              <button 
                className="btn text-dark dropdown-toggle d-flex align-items-center" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <div className="me-2">
                  <div 
                    className="rounded-circle bg-light border d-flex align-items-center justify-content-center" 
                    style={{width: '40px', height: '40px'}}
                  >
                    <i className="fas fa-user text-muted"></i>
                  </div>
                </div>
                <div className="d-none d-sm-flex flex-column text-start">
                  <span className="fw-semibold text-dark studentName">Temiloluwa Akinbote</span>
                  <small className="text-muted matricNo">220538</small>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
              </ul>
            </div>
          </div>

        </div>

      </nav>

      {/* Bootstrap JS CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Navbar;