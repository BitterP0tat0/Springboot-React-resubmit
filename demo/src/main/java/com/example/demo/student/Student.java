package com.example.demo.student;

import java.util.UUID;

public class Student {
    private final UUID studentId;
    private final String firstname;
    private final String familyname;
    private final int age;
    private final String email;
    private final Gender gender;

    public Student(UUID studentId, String firstname, String familyname, int age, String email, Gender gender) {
        this.studentId = studentId;
        this.firstname = firstname;
        this.familyname = familyname;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }

    public enum Gender {
        Male, Female;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getFamilyname() {
        return familyname;
    }

    public int getAge() {
        return age;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Student [studentId=" + studentId + ", firstname=" + firstname + ", familyname=" + familyname + ", age="
                + age + ", email=" + email + ", gender=" + gender + "]";
    }

}