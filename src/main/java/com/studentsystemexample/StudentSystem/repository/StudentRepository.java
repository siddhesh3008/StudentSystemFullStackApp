package com.studentsystemexample.StudentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.studentsystemexample.StudentSystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
}
