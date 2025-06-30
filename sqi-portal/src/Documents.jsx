import React from 'react';
import './Documents.css';

const Documents = () => {
  return (
    <div className="documents-section bg-white p-4 rounded shadow-sm text-center">
      <h5 className="fw-bold mb-3 text-start">Documents</h5>
      <div className="empty-doc">
        <i className="bi bi-folder-x text-muted mb-3" style={{ fontSize: '2.5rem' }}></i>
        <p className="text-muted" style={{ fontSize: '14px' }}>
          You have not uploaded any document here
        </p>
      </div>
    </div>
  );
};

export default Documents;
