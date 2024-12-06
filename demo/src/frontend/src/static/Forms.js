import React from "react";
import { Form, Input, Button, Select } from "antd";

const Forms = (props) => {
  return (
    <div>
      <Form
        name="studentForm"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          marginTop: 10,
          maxWidth: 600,
          textAlign: "center",
        }}
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Student First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your student first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Student Family Name"
          name="familyname"
          rules={[
            {
              required: true,
              message: "Please input your student last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Student Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your student email!",
            },
            {
              type: "email",
              message: "The input is not a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Gender is required",
            },
          ]}
        >
          <Select placeholder="Select Gender">
            <Select.Option value="MALE">Male</Select.Option>
            <Select.Option value="FEMALE">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
