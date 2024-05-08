import React from "react";
import { Form,Button } from "antd";
 
  const Forms = ({ formItems,formRef }) => {
    const onFinish = (values) => {
      console.log('Received values:',values);
    };
    const handleReset = () => {
      formRef.current.resetFields();
    };
  
    return (
      <Form onFinish={onFinish} 
           ref={formRef}
      initialValues={{ toggle: false, slider1: [20, 50] }}
      validateTrigger="onSubmit">
        {formItems.map((item, index) => (
          <Form.Item
            key={index}
            label={item.label}
            name={item.name}
            rules={item.rules}
          >
            
            {item.render()}
          </Form.Item>
          
        ))}    
          <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" onClick={handleReset} style={{ marginLeft: 8 }}>
          Reset
        </Button>
      </Form.Item>

      </Form>
    );
  };

export default Forms;
