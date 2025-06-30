import React, { useState } from 'react';
import './RegistrationHistory.css';

const sessions = [
  '2023/2024 | F',
  '2023/2024 | S',
  '2024/2025 | F',
  '2024/2025 | S'
];

const courseData = [
  { code: 'WFE 103', title: 'CASCADING STYLE SHEET - CSS', units: 2 },
  { code: 'WFE 105', title: 'INTRODUCTION TO JAVASCRIPT', units: 1 },
  { code: 'WFE 101', title: 'HTML5', units: 2 },
  { code: 'WFE 113', title: 'BOOTSTRAP', units: 3 },
  { code: 'WFE 109', title: 'VERSION CONTROL SYSTEM (LOCAL)', units: 1 },
  { code: 'WFE 117', title: 'HOSTING AND DEPLOYMENT', units: 1 },
  { code: 'WFE 119', title: 'DOCUMENTATION', units: 1 },
  { code: 'WFE 112', title: 'VERSION CONTROL SYSTEM (REMOTE)', units: 1 },
  { code: 'WFE 108', title: 'JAVASCRIPT', units: 5 }
];

const RegistrationHistory = () => {
  const [selectedSession, setSelectedSession] = useState(sessions[2]); // Default to 2024/2025 | F

  const totalUnits = courseData.reduce((sum, c) => sum + c.units, 0);

  return (
    <div className="registration-history bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h5 className="fw-bold mb-0">Registration History</h5>
        <select
          className="form-select form-select-sm w-auto"
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
        >
          {sessions.map((session, index) => (
            <option key={index} value={session}>{session}</option>
          ))}
        </select>
      </div>

      <div className="table-responsive">
        <table className="table table-striped align-middle text-nowrap">
          <thead className="table-light">
            <tr>
              <th>Course</th>
              <th>Title</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map(course => (
              <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-end fw-semibold mt-3">
        Total Units: {totalUnits}
      </div>
    </div>
  );
};

export default RegistrationHistory;
