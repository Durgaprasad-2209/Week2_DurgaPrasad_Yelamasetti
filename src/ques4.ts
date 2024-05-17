

interface Student {
    name: string;
    age: number;
    grade: number;
  }
  
  const students: Student[] = [
    { name: "Alice", age: 20, grade: 75 },
    { name: "Bob", age: 22, grade: 85 },
    { name: "Charlie", age: 21, grade: 60 },
    { name: "David", age: 19, grade: 45 },
    { name: "Eve", age: 20, grade: 90 }
  ];
  
  function filterPassedStudents(students: Student[]): Student[] {
    return students.filter(student => student.grade >= 50);
  }
  
  function getStudentNames(students: Student[]): string[] {
    return students.map(student => student.name);
  }
  
  function sortStudentsByGrade(students: Student[]): Student[] {
    return students.slice().sort((a, b) => a.grade - b.grade);
  }
  
  function getAverageAge(students: Student[]): number {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  const passedStudents = filterPassedStudents(students);
  console.log('Passed Students:', passedStudents);
  
  const studentNames = getStudentNames(students);
  console.log('Student Names:', studentNames);
  
  const sortedStudents = sortStudentsByGrade(students);
  console.log('Sorted Students by Grade:', sortedStudents);
  
  const averageAge = getAverageAge(students);
  console.log('Average Age:', averageAge);
  