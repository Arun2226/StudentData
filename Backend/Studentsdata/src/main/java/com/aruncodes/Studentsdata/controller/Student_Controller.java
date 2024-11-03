package com.aruncodes.Studentsdata.controller;

import com.aruncodes.Studentsdata.Service.Student_Service;
import com.aruncodes.Studentsdata.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class Student_Controller {

    @Autowired
    private Student_Service student_Service;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        student_Service.save(student);
        return "New student added";
    }

    @GetMapping("/studentdata")
    public List<Student> getStudentdata() {
        return student_Service.getAllStudents();
    }
}
