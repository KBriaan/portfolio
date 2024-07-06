

import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showloading, hideloading } from "../../redux/rootSlice";
import axios from "axios";
import {message} from 'antd'

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root) || {};

  const onFinish = async (values) => {
    try {
 const tempSkills = values.skills.split(',');
 values.skills = tempSkills

      dispatch(showloading())
      const response = await axios.post('api/portfolio/update-about', {
        ...values,
        _id:portfolioData.about._id,
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
        initialValues={{
        ...portfolioData.about,
          skills:portfolioData.about.skills.join(', ')

        }}
      >
        <Form.Item name="lottieURL" label="Lottie URL">
          <Input placeholder="Lottie URL" />
        </Form.Item>
   
       
        <Form.Item name="description1" label="Description1">
          <Input.TextArea placeholder="Description1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <Input.TextArea placeholder="Description2" />
        </Form.Item>

        <Form.Item name="skills" label="Skills">
          <Input.TextArea placeholder="Skills" />
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

export default AdminAbout;
