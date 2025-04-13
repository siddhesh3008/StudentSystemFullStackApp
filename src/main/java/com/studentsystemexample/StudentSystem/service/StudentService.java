package com.studentsystemexample.StudentSystem.service;

import java.util.List;

import com.studentsystemexample.StudentSystem.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
