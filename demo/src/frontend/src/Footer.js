import React from "react";
import { Avatar, Button } from "antd";
import Container from "./static/Container";
import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="footer">
      <Container className="footer">
        {props.numberOfStudents ? (
          <Avatar style={{ marginRight: "10px" }}>
            {props.numberOfStudents}
          </Avatar>
        ) : null}
        <Button type="primary" onClick={props.handleAddStudentClickEvent}>
          Add new Student
        </Button>
      </Container>
    </div>
  );
};

export default Footer;
