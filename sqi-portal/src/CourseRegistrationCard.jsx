import React from 'react';

const CourseRegistrationCard = () => {
  return (
    <div className="card border-0 bg-white" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}>
      <div className="card-body p-3">
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <i className="bi-calendar-check text-primary me-2" style={{ fontSize: '1.2rem' }}></i>
          <h6 style={{ fontSize: '16px', fontWeight: '600', color: '#212529', margin: '0' }}>
            Course Registration
          </h6>
        </div>

        {/* Countdown Section */}
        <div className="d-flex justify-content-center align-items-center" > <div className="mb-3">
          <div className='align-items-center' style={{ 
            fontSize: '13px', 
            fontWeight: '400', 
            color: 'rgba(33, 37, 41, 0.7)', 
            marginBottom: '6px' ,
            textAlign: 'center'
          }}>
            Course Registration Closes in
          </div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            color: '#dc3545',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            textAlign: 'center'
          }}>
            0d 0h 0m 0s
          </div>
        </div></div>
       

        {/* Status Section */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div style={{ 
              fontSize: '13px', 
              fontWeight: '400', 
              color: 'rgba(33, 37, 41, 0.7)', 
              marginBottom: '2px' 
            }}>
              Status
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-danger me-2" style={{ fontSize: '11px' }}>
                <i className="bi-x-circle me-1"></i>
                Closed
              </span>
            </div>
          </div>
          <a href="#" className="btn btn-outline-primary btn-sm" style={{ 
            fontSize: '13px', 
            fontWeight: '500',
            padding: '6px 12px'
          }}>
            <i className="bi-eye me-1"></i>
            View Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationCard;