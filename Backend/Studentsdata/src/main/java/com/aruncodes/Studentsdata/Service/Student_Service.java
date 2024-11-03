package com.aruncodes.Studentsdata.Service;

import com.aruncodes.Studentsdata.entity.Student;

import java.util.List;

public interface Student_Service {
    public Student save(Student student);
    public List<Student> getAllStudents();
}
