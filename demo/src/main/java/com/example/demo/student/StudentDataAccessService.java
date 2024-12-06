package com.example.demo.student;

import java.util.List;
import java.util.UUID;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDataAccessService {
    private final JdbcTemplate jdbcTemplate;

    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Student> selectAllStudents() {
        String sql = "SELECT student_id, first_name, last_name, email, gender FROM students";

        return jdbcTemplate.query(
                sql,
                extracted());

    }

    private RowMapper<Student> extracted() {
        return (resultSet, i) -> {
            String studentIdStr = resultSet.getString("student_id");
            UUID studentId = UUID.fromString(studentIdStr);

            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");

            String genderStr = resultSet.getString("gender").toUpperCase();
            Student.Gender gender = Student.Gender.valueOf(genderStr);

            return new Student(studentId, firstName, lastName, email, gender);
        };
    }

    public void save(Student student) {
        String sql = "INSERT INTO students (student_id, first_name, last_name, email, gender) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql,
                student.getStudentId(),
                student.getFirstname(),
                student.getFamilyname(),
                student.getEmail(),
                student.getGender().name().toUpperCase());
    }
}
