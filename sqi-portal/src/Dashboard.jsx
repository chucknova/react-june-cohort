import React from 'react'
import StudentInfoCards from './StudentInfoCards'
import GreetUser from './GreetUser'
import InvoiceCard from './InvoiceCard'
import CourseRegistrationCard from './CourseRegistrationCard'
import TopCoursesCard from './TopCoursesCard'
import PerformanceCard from './PerformanceCard'
import QuickActions from './QuickActions'
import RecentActivities from './RecentActivities'
import OpenedTests from './OpenedTests'
import VirtualClass from './VirtualClass'
import NoticeBoard from './NoticeBoard'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='greetUser'>
        <GreetUser></GreetUser>
      </div>

      <div className='studentInfoCards'>
        <StudentInfoCards></StudentInfoCards>
      </div>

      <div className='tier-two-cards'>
        <div className='left-div'>
          <InvoiceCard></InvoiceCard>
        </div>
        <div className='middle-div'>
          <CourseRegistrationCard></CourseRegistrationCard>
          <TopCoursesCard></TopCoursesCard>
        </div>
        <div className='right-div'>
          <PerformanceCard></PerformanceCard>
        </div>
      </div>

      <div className='studentInfoCards'>
        <QuickActions></QuickActions>
      </div>

      <div className='tier-three-cards'>
        <div className='lefty-div'>
          <RecentActivities></RecentActivities>
        </div>
        <div className='righty-div'>
          <OpenedTests></OpenedTests>
        </div>
      </div>

      <div className='tier-three-cards'>
        <div className='lefty-div'>
           <VirtualClass></VirtualClass>
        </div>
        <div className='righty-div'>
          <NoticeBoard></NoticeBoard>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
