import React from 'react';

const TopCoursesCard = () => {
  return (
    <div className="card border-0 bg-white" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}>
      <div className="card-body p-3">
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <i className="bi-mortarboard text-primary me-2" style={{ fontSize: '1.2rem' }}></i>
          <h6 style={{ fontSize: '16px', fontWeight: '600', color: '#212529', margin: '0' }}>
            Top Courses
          </h6>
        </div>

        {/* Empty State */}
        <div className="text-center py-4">
          <i className="bi-clipboard-x text-muted mb-3" style={{ fontSize: '2.5rem' }}></i>
          <p style={{ 
            fontSize: '14px', 
            fontWeight: '400', 
            color: 'rgba(33, 37, 41, 0.7)', 
            margin: '0',
            lineHeight: '1.4'
          }}>
            You currently do not have any approved result
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCoursesCard;