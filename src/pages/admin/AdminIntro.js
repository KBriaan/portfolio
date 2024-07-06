

import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showloading, hideloading } from "../../redux/rootSlice";
import axios from "axios";
import {message} from 'antd'

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root) || {};

  const onFinish = async (values) => {
    try {
      dispatch(showloading())
      const response = await axios.post('api/portfolio/update-intro', {
        ...values,
        _id:portfolioData.intro._id,
      });
      dispatch(showloading())
      if (response.data.success){
        message.success(response.data.message)
      }
      else{
        message.error(response.data.message)

      }
    } catch (error) {
      message.error(error.message)


    }
    dispatch(hideloading());

  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData?.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <div className="flex justify-end w-full">
          <Button className="px-10 py-2 bg-primary text-white" type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
