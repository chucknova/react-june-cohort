import React from 'react';
import './RecentActivities.css';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      action: 'Accessed Dashboard',
      section: 'Dashboard',
      time: '58 minutes ago'
    },
    {
      id: 2,
      action: 'Access Course Registration',
      section: 'Course Registration',
      time: '58 minutes ago'
    },
    {
      id: 3,
      action: 'Access Document List',
      section: 'Document List',
      time: '58 minutes ago'
    },
    {
      id: 4,
      action: 'Fetched Profile',
      section: 'My Profile',
      time: '58 minutes ago'
    },
  ];

  return (
    <div className="recent-activities-container bg-white rounded">
      <h6 className="mb-3 fw-semibold">Recent Activities</h6>
      <div className="d-flex flex-column gap-3">
        {activities.map(activity => (
          <div
            key={activity.id}
            className="p-3 rounded bg-light d-flex justify-content-between align-items-start activity-item"
          >
            <div>
              <div className="fw-medium text-dark fs-6">{activity.action}</div>
              <div className="text-muted small">{activity.section}</div>
            </div>
            <div className="text-muted small">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
