import React, { useState, useEffect } from 'react';
import './App.css';

const mockStudents = [
  { id: 1, name: 'Student 1', grade: 'A' },
  { id: 2, name: 'Student 2', grade: 'B' },
  // ...more student data
];

const mockTeachers = [
  { id: 1, name: 'Teacher 1', subject: 'Math' },
  { id: 2, name: 'Teacher 2', subject: 'Science' },
  // ...more teacher data
];

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    setStudents(mockStudents);
    setTeachers(mockTeachers);
  }, []);

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setSelectedTeacher(null);
  };

  const handleTeacherSelect = (teacher) => {
    setSelectedTeacher(teacher);
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (studentId) => {
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
    setSelectedStudent(null);
  };

  const handleDeleteTeacher = (teacherId) => {
    const updatedTeachers = teachers.filter(teacher => teacher.id !== teacherId);
    setTeachers(updatedTeachers);
    setSelectedTeacher(null);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <div className="students-list">
          <h3>Students</h3>
          <ul>
            {students.map(student => (
              <li key={student.id} onClick={() => handleStudentSelect(student)}>
                {student.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="teachers-list">
          <h3>Teachers</h3>
          <ul>
            {teachers.map(teacher => (
              <li key={teacher.id} onClick={() => handleTeacherSelect(teacher)}>
                {teacher.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-content">
        {selectedStudent && (
          <div className="student-details">
            <h3>{selectedStudent.name}</h3>
            <p>Grade: {selectedStudent.grade}</p>
            <button onClick={() => handleDeleteStudent(selectedStudent.id)}>Delete</button>
          </div>
        )}
        {selectedTeacher && (
          <div className="teacher-details">
            <h3>{selectedTeacher.name}</h3>
            <p>Subject: {selectedTeacher.subject}</p>
            <button onClick={() => handleDeleteTeacher(selectedTeacher.id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;