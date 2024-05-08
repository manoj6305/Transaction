import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';

const { Option } = Select;

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    itemName: '',
    description: '',
    category: 'food',
    dateOfPayment: null,
    transactionMode: 'cash',
  });

  const handleChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const onFinish = () => {
    console.log('Form data:', formData);
    // You can handle form submission logic here
  };

  return (
    <Form
      name="transaction_form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="ID">
        <Input onChange={(e) => handleChange('id', e.target.value)} />
      </Form.Item>

      <Form.Item label="Item Name">
        <Input onChange={(e) => handleChange('itemName', e.target.value)} />
      </Form.Item>

      <Form.Item label="Description">
        <Input.TextArea onChange={(e) => handleChange('description', e.target.value)} />
      </Form.Item>

      <Form.Item label="Category">
        <Select onChange={(value) => handleChange('category', value)}>
          <Option value="food">Food</Option>
          <Option value="clothing">Clothing</Option>
          <Option value="electronics">Electronics</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date of Payment">
        <DatePicker onChange={(date) => handleChange('dateOfPayment', date)} />
      </Form.Item>

      <Form.Item label="Transaction Mode">
        <Select onChange={(value) => handleChange('transactionMode', value)}>
          <Option value="cash">Cash</Option>
          <Option value="credit_card">Credit Card</Option>
          <Option value="debit_card">Debit Card</Option>
          <Option value="online">Online</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TransactionForm;
