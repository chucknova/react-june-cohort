import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    // Submit logic here...
    console.log('Password changed:', formData);
  };

  return (
    <div className="change-password-section bg-white p-4 rounded shadow-sm">
      <h5 className="fw-bold mb-4">Change Password</h5>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <div>
          <label className="form-label">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            className="form-control"
            value={formData.oldPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="form-label">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="form-label">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="pt-2">
          <button type="submit" className="btn btn-primary">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
