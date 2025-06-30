import React from 'react';
import './NotFound.css'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <p className="fs-4 text-secondary">Oops! The page you're looking for doesn't exist.</p>
      <Link to={"/home/dashboard"} className="btn btn-outline-primary mt-3">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
