import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import ProfileSection from './ProfileSection'
import ChangePassword from './ChangePassword'
import Navbar from './Navbar'
import Documents from './Documents'
import CourseRegistration from './CourseRegistration'
import RegistrationHistory from './RegistrationHistory'
import SemesterResult from './SemesterResult'
import PaymentHistory from './PaymentHistory'
import Timetable from './Timetable'
import './Sidebar.css'
import { Outlet } from "react-router";

const Main = () => {
  return (
    <>
      <div className='app-container'>
        <div className='sidebar'>
          <Sidebar></Sidebar>
        </div>
        <div className='main-content'>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}

export default Main
