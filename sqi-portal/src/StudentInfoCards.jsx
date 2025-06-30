import React from 'react';

const StudentInfoCards = () => {
  const studentData = [
    {
      title: "Matric Number",
      value: "220538",
      icon: "bi-person-badge"
    },
    {
      title: "Level | Semester", 
      value: "LEVEL 3 | S",
      icon: "bi-bookmark-fill"
    },
    {
      title: "Current CGPA",
      value: "4.85",
      icon: "bi-trophy-fill"
    },
    {
      title: "Dept | Programme",
      value: "DSE-WDFS | PDC",
      icon: "bi-building"
    }
  ];

  return (
    <div className="d-flex w-100 gap-3" style={{ padding: '16px' }}>
      {studentData.map((item, index) => (
        <div key={index} className="flex-fill">
          <div className="card h-100 border-0 bg-white" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)' }}>
            <div className="card-body d-flex align-items-center p-3">
              <i className={`${item.icon} text-primary me-3`} style={{ fontSize: '1.5rem' }}></i>
              <div className="flex-grow-1">
                <div className="text-dark" style={{ fontSize: '20px', fontWeight: '700' }}>{item.value}</div>
                <div style={{ fontSize: '13px', fontWeight: '300', color: 'rgba(33, 37, 41, 0.7)' }}>{item.title}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentInfoCards;