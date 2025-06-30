import React, { useState } from 'react';
import './CourseRegistration.css';

const CourseRegistration = () => {
  const initialCourses = [
    { id: 1, code: 'VC WBE 201', title: 'NODE JS', units: 2 },
    { id: 2, code: 'VC WFE 203', title: 'REACT.JS', units: 4 },
    { id: 3, code: 'VC WBE 203', title: 'MONGO DB', units: 2 },
    { id: 4, code: 'VC WFE 209', title: 'VERSION CONTROL SYSTEM (ADVANCED)', units: 1 }
  ];

  const departmentCourses = [
    { code: 'VC AFE 101', title: 'UI/UX DESIGN', units: 3 },
    { code: 'VC SSE 303', title: 'SOFTWARE ENGINEERING', units: 4 },
    { code: 'VC DSA 102', title: 'DATA STRUCTURES', units: 3 },
    { code: 'VC WBE 203', title: 'MONGO DB', units: 2 },
    { code: 'VC WFE 209', title: 'VERSION CONTROL SYSTEM (ADVANCED)', units: 1},
    { code: 'VC WBE 201', title: 'NODE JS', units: 2}
  ];

  const [registeredCourses, setRegisteredCourses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState('');

  const totalUnits = registeredCourses.reduce((sum, course) => sum + course.units, 0);

  const handleAddCourse = () => {
    const course = departmentCourses.find(c => c.code === selectedCourse);
    if (course && !registeredCourses.some(c => c.code === course.code)) {
      setRegisteredCourses(prev => [...prev, { ...course, id: Date.now() }]);
      setSelectedCourse('');
    }
  };

  const handleDeleteCourse = (id) => {
    setRegisteredCourses(prev => prev.filter(course => course.id !== id));
  };

  return (
    <div className="course-registration-section bg-white p-4 rounded shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h5 className="fw-bold mb-0">Course Registration</h5>
        <div className="text-muted small">
          <span className="me-3"><strong>Penalty:</strong> 2025-12-31</span>
          <span><strong>Closure:</strong> 2025-12-31</span>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-borderless align-middle mb-4">
          <thead className="table-light">
            <tr>
              <th>S/N</th>
              <th>Course Title</th>
              <th>Description</th>
              <th>Units</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredCourses.map((course, index) => (
              <tr key={course.id} className="course-row">
                <td>{index + 1}</td>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.units}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {registeredCourses.length === 0 && (
              <tr>
                <td colSpan="5" className="text-muted text-center">No courses registered yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="text-end fw-semibold mb-4">
        Total Units: {totalUnits}
      </div>

      <div className="bg-light p-3 rounded">
        <h6 className="fw-semibold mb-3">Add Department Course</h6>
        <div className="row g-2 align-items-center">
          <div className="col-md-6">
            <select
              className="form-select"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select a course</option>
              {departmentCourses.map(course => (
                <option key={course.code} value={course.code}>
                  {course.code} - {course.title} ({course.units} units)
                </option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleAddCourse}>
              Add Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistration;