import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  const personal = {
    Surname: 'Akinbote',
    'First Name': 'Temiloluwa',
    'Middle Name': '',
    Gender: '',
    'Marital Status': '',
    'Date of Birth': 'dd/mm/yyyy',
    Nationality: '',
    'State of Origin': ''
  };

  const contact = {
    'Phone Number': '0701 401 6009',
    'Phone Number 2': '0701 401 6009',
    Email: 'akinbotetemiloluwa9@gmail.com',
    Address: ''
  };

  const referee = {
    'Full Name': '',
    'Phone Number': '',
    Email: ''
  };

  return (
    <div className="profile-section shadow-sm bg-white p-4 rounded">
      <h5 className="mb-4 fw-bold">Profile Information</h5>

      {/* PERSONAL INFO */}
      <h6 className="fw-semibold mb-3">Personal Information</h6>
      <div className="row gy-4 mb-4">
        {Object.entries(personal).map(([label, value]) => (
          <div className="col-md-4" key={label}>
            <label className="profile-label">{label}</label>
            <div className="profile-value">{value || '-'}</div>
          </div>
        ))}
      </div>

      {/* CONTACT INFO */}
      <h6 className="fw-semibold mb-3">Contact Information</h6>
      <div className="row gy-4 mb-4">
        {Object.entries(contact).map(([label, value]) => (
          <div className="col-md-4" key={label}>
            <label className="profile-label">{label}</label>
            <div className="profile-value">{value || '-'}</div>
          </div>
        ))}
      </div>

      {/* REFEREE INFO */}
      <h6 className="fw-semibold mb-3">Referee Information</h6>
      <div className="row gy-4">
        {Object.entries(referee).map(([label, value]) => (
          <div className="col-md-4" key={label}>
            <label className="profile-label">{label}</label>
            <div className="profile-value">{value || '-'}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
