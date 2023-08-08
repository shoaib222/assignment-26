const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockApi = {
  fetchStudents: () => delay(500).then(() => mockStudents),
  fetchTeachers: () => delay(500).then(() => mockTeachers),
  deleteStudent: (studentId) => delay(300).then(() => {
    mockStudents = mockStudents.filter(student => student.id !== studentId);
    return true;
  }),
  deleteTeacher: (teacherId) => delay(300).then(() => {
    mockTeachers = mockTeachers.filter(teacher => teacher.id !== teacherId);
    return true;
  }),
};

export default mockApi;