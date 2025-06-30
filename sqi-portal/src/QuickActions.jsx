import React from 'react';
import './QuickActions.css'

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Notice Board',
      icon: 'fas fa-bell',
      color: 'text-primary'
    },
    {
      id: 2,
      title: 'Pay Tuition',
      subtitle: '₦0.00',
      icon: 'fas fa-credit-card',
      color: 'text-success'
    },
    {
      id: 3,
      title: 'Register Courses',
      icon: 'fas fa-book-open',
      color: 'text-info'
    },
    {
      id: 4,
      title: 'Semester Result',
      icon: 'fas fa-trophy',
      color: 'text-warning'
    },
    {
      id: 5,
      title: 'Upload Documents',
      icon: 'fas fa-upload',
      color: 'text-secondary'
    }
  ];

  return (
    <div className="container-fluid px-2 actionsContainer2">
  <div className="container px-0 actionsContainer">
    <div className="d-flex" style={{ gap: '12px' }}>
      {actions.map((action) => (
        <div
          key={action.id}
          className="flex-fill bg-white rounded p-3 d-flex align-items-center"
          style={{
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
          }}
        >
          <div className="me-3">
            <i className={`${action.icon} ${action.color} fs-5`}></i>
          </div>
          <div className="flex-grow-1">
            <h6 className="mb-0 fw-semibold">{action.title}</h6>
            {action.subtitle && (
              <small className="text-muted">{action.subtitle}</small>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default QuickActions;