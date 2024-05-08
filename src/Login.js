import React from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  Typography
} from 'antd';
import './Login.css';
// import { LockOutlined } from '@ant-design/icons';

const { Link,Title } = Typography;

// Define the layout for form items
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Login = () => {
  // Use Form hooks to manage form state
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = (values) => {
    console.log(values);
  };

  // Handle form reset
  const onReset = () => {
    form.resetFields();
  };

  // Validate email format
  const validateEmail = (rule, value) => {
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return Promise.reject('Please enter a valid email address');
    }
    return Promise.resolve();
  };

  // Validate password format
  const validatePassword = (rule, value) => {
    if (value && value.length < 8) {
      return Promise.reject('Password must be at least 8 characters long');
    }
    if (value && !/[A-Z]/.test(value)) {
      return Promise.reject('Password must contain at least one uppercase letter');
    }
    if (value && !/[a-z]/.test(value)) {
      return Promise.reject('Password must contain at least one lowercase letter');
    }
    if (value && !/\d/.test(value)) {
      return Promise.reject('Password must contain at least one digit');
    }
    return Promise.resolve();
  };

  return (
    <div className='full-page'>
      <Card className='header'>
      <Title className='title' level={3} >Login</Title>
        <Form
          className='form-item'
          // {...formItemLayout}
          form={form}
          variant="filled"
          onFinish={onFinish}
        >
          {/* Email input field */}
          <Form.Item
            label="Mail"
            name="Input"
            rules={[{ message: 'Please input your email!' },{validator: validateEmail }]}
          >
            <Input />
          </Form.Item>
          {/* Password input field */}
          <Form.Item
            name="password"
            label="Password"
            rules={[{  message: 'Please input your password!' }, {validator: validatePassword, },]}
          >
            <Input.Password   />
          </Form.Item>
          {/* Buttons for Reset and Login */}
          <div style={{ justifyContent: 'space-around', display: 'flex' }}>
            <Button type="primary" danger style={{ width: '140px' }} onClick={onReset}>
              Reset
            </Button>
            <Button type='primary' htmlType='submit' success style={{ width: '140px' }}>
              Login
            </Button>
          </div>
          {/* Additional text */}
          <Typography.Paragraph style={{ textAlign: 'center', paddingTop: '20px' }}>
            If you don't have an account, you can{' '}
            <Link href="" target="_blank">
              Register
            </Link>
          </Typography.Paragraph>
          {/* Forgot Password link */}
          <Typography.Link href="" target="_blank" style={{ color: 'red', display: 'block', textAlign: 'center' }}>
            Forgot Password?
          </Typography.Link>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
