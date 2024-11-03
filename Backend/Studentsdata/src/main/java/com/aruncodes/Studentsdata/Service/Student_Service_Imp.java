package com.aruncodes.Studentsdata.Service;

import com.aruncodes.Studentsdata.entity.Student;
import com.aruncodes.Studentsdata.repository.Studentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Student_Service_Imp implements Student_Service {

    @Autowired
    private Studentrepo studentrepo;

    @Override
    public Student save(Student student) {
        return studentrepo.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentrepo.findAll();
    }
}
