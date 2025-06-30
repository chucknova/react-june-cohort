import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='d-flex flex-column flex-shrink-0 p-2 text-white sidebar-container'>
      <div
        className='logo-container'
        style={{ paddingLeft: '16px', paddingRight: '16px', paddingTop: '8px' }}
      >
        <a
          href='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none'
        >
          <img
            src='https://i.ibb.co/bg0r9zz3/logo.png'
            alt='logo'
            style={{ width: '280px' }}
          />
        </a>
      </div>

      <hr className='border-light' />
      <ul className='nav nav-pills flex-column mb-auto'>
        <li>
          <Link
            to={'/home/dashboard'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={'/home/profile'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to={'/home/change-password'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Change Password
          </Link>
        </li>
        <li>
          <Link
            to={'/home/documents'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Documents
          </Link>
        </li>
        <li>
          <Link
            to={'/home/course-registration'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Course Registration
          </Link>
        </li>
        <li>
          <Link
            to={'/home/payments'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Payment-History
          </Link>
        </li>
        <li>
          <Link
            to={'/home/registrationhistory'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Registration History
          </Link>
        </li>
        <li>
          <Link
            to={'/home/results'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            Semester Results
          </Link>
        </li>
        <li>
          <Link
            to={'/home/timetable'}
            className='nav-link text-white hover-bg-primary pageItem d-flex align-items-center'
            style={{ fontSize: '14px' }}
          >
            {' '}
            <i className='bi bi-house-door-fill me-2'></i>
            View Timetable
          </Link>
        </li>
      </ul>
      <hr className='border-light' />
    </div>
  )
}

export default Sidebar
