import { getAllStudents } from "./clients";
import React, { Component } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Table, Avatar, Spin, Flex } from "antd";
import Container from "./static/Container";
import Loading from "./static/Loading";

class App extends Component {
  state = { student: [], isFetching: false };

  componentDidMount() {
    this.fetchStudents();
  }
  fetchStudents = () => {
    this.setState({ isFetching: true });
    getAllStudents().then((res) =>
      res.json().then((student) => {
        this.setState({ student, isFetching: false });
      })
    );
  };
  render() {
    const { student, isFetching } = this.state;

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
            <Avatar size={"large"}>
              <Avatar
                style={
                  ({ size: "large" },
                  { backgroundColor: "#fde3cf" },
                  { color: "black" })
                }
              >
                {student.firstname.charAt(0).toUpperCase()}
                {student.familyname.charAt(0).toUpperCase()}
              </Avatar>
            </Avatar>
          ),
        },
        {
          title: "StudentId",
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
        </Container>
      );
    }

    return <h1>No student found</h1>;
  }
}
export default App;
//APP
