import React from 'react';
import './Timetable.css';

const Timetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 17:00'
  ];

  // Optional subject map for clarity
  const subjectMap = {
    'Monday-10:00 - 12:00': 'React',
    'Wednesday-10:00 - 12:00': 'React',
    'Tuesday-12:00 - 14:00': 'Node.js',
    'Thursday-12:00 - 14:00': 'Node.js',
    'Friday-14:00 - 16:00': 'MongoDB'
  };

  return (
    <div className="timetable-section bg-white p-4 rounded shadow-sm">
      <h5 className="fw-bold mb-4">Timetable</h5>

      <div className="table-responsive">
        <table className="table timetable-table text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Day / Time</th>
              {days.map((day, idx) => (
                <th key={idx}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, i) => (
              <tr key={i}>
                <td className="fw-semibold">{slot}</td>
                {days.map((day, j) => {
                  const key = `${day}-${slot}`;
                  const subject = subjectMap[key];

                  return (
                    <td key={j} className={`timetable-cell ${subject ? 'has-subject' : ''}`}>
                      {subject && <span className="subject-pill">{subject}</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;