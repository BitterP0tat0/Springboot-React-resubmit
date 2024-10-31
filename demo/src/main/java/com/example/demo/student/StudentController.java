package com.example.demo.student;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("students")
public class StudentController {

    private final List<Student> students;

    public StudentController() {
        students = Arrays.asList(
                new Student(UUID.randomUUID(), "Alice", "Smith", 20, "alice.smith@example.com", Student.Gender.Female),
                new Student(UUID.randomUUID(), "Bob", "Johnson", 22, "bob.johnson@example.com", Student.Gender.Male));
    }

    @GetMapping
    public List<Student> getStudents() {
        return students;
    }
}