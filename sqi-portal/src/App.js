import React from 'react'
import Main from './Main'
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseRegistration from './CourseRegistration';
import Documents from './Documents';
import ChangePassword from './ChangePassword';
import PaymentHistory from './PaymentHistory';
import ProfileSection from './ProfileSection';
import RegistrationHistory from './RegistrationHistory';
import SemesterResult from './SemesterResult';
import NotFound from './NotFound';
import Timetable from './Timetable';

const App = () => {
  return (
    <>
      <Routes>
        {/* Nested */}
        <Route path="/" element={<Main />}>
          <Route path='/home/dashboard' element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path='/home/course-registration' element={<CourseRegistration />} />
          <Route path='/home/change-password' element={<ChangePassword />} />
          <Route path='/home/documents' element={<Documents />} />
          <Route path='/home/payments' element={<PaymentHistory />} />
          <Route path='/home/profile' element={<ProfileSection />} />
          <Route path='/home/registrationhistory' element={<RegistrationHistory />} />
          <Route path='/home/results' element={<SemesterResult />} />
          <Route path='/home/timetable' element={<Timetable />} />
        </Route>
        {/* Single */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App