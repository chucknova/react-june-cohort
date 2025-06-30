import React from 'react';
import './SemesterResult.css';

const SemesterResult = () => {
  return (
    <div className="semester-result-section bg-white p-4 rounded shadow-sm text-center">
      <h5 className="fw-bold mb-4">Semester Result</h5>

      <div className="empty-result-box mx-auto">
        <i className="bi bi-clipboard-x text-muted mb-3" style={{ fontSize: '2.5rem' }}></i>
        <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
          No result yet
        </p>
      </div>
    </div>
  );
};

export default SemesterResult;