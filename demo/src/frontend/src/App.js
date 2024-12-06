import { getAllStudents } from "./clients";
import React, { Component } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Table, Avatar, Spin, Modal } from "antd";
import Forms from "./static/Forms";
import Container from "./static/Container";
import Loading from "./static/Loading";
import Footer from "./Footer";
import "./Footer.css";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    student: [],
    isFetching: false,
    isAddStudentModalVisible: false,
  };

  openAddStudentModal = () => {
    this.setState({
      isAddStudentModalVisible: true,
    });
  };

  closeAddStudentModal = () => {
    this.setState({
      isAddStudentModalVisible: false,
    });
  };

  onFinish = (values) => {
    const studentData = {
      ...values,
      studentId: uuidv4(),
    };
    axios
      .post("/api/students", studentData)
      .then((response) => {
        console.log("Saving successfully:", response.data);
        alert("Student added successfully!");
        this.fetchStudents();
        this.closeAddStudentModal();
      })
      .catch((error) => {
        console.error("Saving error", error);
        alert("Error occurred while saving student. Please try again.");
      });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    this.setState({ isFetching: true });
    getAllStudents()
      .then((res) =>
        res.json().then((student) => {
          this.setState({ student, isFetching: false });
        })
      )
      .catch((error) => {
        console.error("Fetching error:", error);
        this.setState({ isFetching: false });
      });
  };

  render() {
    const { student, isFetching, isAddStudentModalVisible } = this.state;

    if (isFetching) {
      return (
        <Loading>
          <Spin
            indicator={
              <LoadingOutlined
                style={{
                  fontSize: 120,
                }}
                spin
              />
            }
          />
        </Loading>
      );
    }

    if (student && student.length) {
      const column = [
        {
          title: "",
          key: "avatar",
          dataIndex: "name",
          render: (text, student) => (
            <Avatar
              size="large"
              style={{
                backgroundColor: "#fde3cf",
                color: "black",
                fontSize: "1.5em",
              }}
            >
              {student.firstname.charAt(0).toUpperCase()}
              {student.familyname.charAt(0).toUpperCase()}
            </Avatar>
          ),
        },
        {
          title: "Student Id",
          dataIndex: "studentId",
          key: "studentId",
        },
        {
          title: "First name",
          dataIndex: "firstname",
          key: "firstname",
        },
        {
          title: "Last name",
          dataIndex: "familyname",
          key: "familyname",
        },
        {
          title: "Gender",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
      ];

      return (
        <Container>
          <Table
            dataSource={student}
            columns={column}
            rowKey={"studentId"}
          ></Table>

          <Modal
            title="Add New Student"
            open={isAddStudentModalVisible}
            onCancel={this.closeAddStudentModal}
            footer={null}
          >
            <Forms
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            ></Forms>
          </Modal>

          <Footer
            numberOfStudents={student.length}
            handleAddStudentClickEvent={this.openAddStudentModal}
          ></Footer>
        </Container>
      );
    }

    return <h1>No student found</h1>;
  }
}

export default App;
