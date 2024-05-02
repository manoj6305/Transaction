import React, { useState } from 'react';
import { Table, Space, Input, Form, Button, Modal, Popconfirm, Row, Col,Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TransactionSeed from './TransactionSeed';

const {Title} = Typography;
const { Search } = Input;

const TransactionForm = () => {
  const [dataSource, setDataSource] = useState(TransactionSeed);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedRecord, setEditedRecord] = useState(null);
  const [searchedData, setSearchedData] = useState(null);

  const showModal = (record) => {
    setEditedRecord(record);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () => {
    const index = dataSource.findIndex((item) => item.key === editedRecord.key);
    if (index !== -1) {
      const updatedDataSource = [...dataSource];
      updatedDataSource[index] = editedRecord;
      setDataSource(updatedDataSource);
    }

    setIsModalVisible(false);
  };

  const handleInputChange = (fieldName, value) => {
    setEditedRecord((prevRecord) => ({
      ...prevRecord,
      [fieldName]: value,
    }));
  };

  const onDelete = (prop) => {
    const updatedData = dataSource.filter((item) => item.Id !== prop);
    setDataSource(updatedData);
  };

  const columns = [
    { title: 'Id', dataIndex: 'Id', key: 'Id', fixed: 'left', width: 40 },
    { title: 'itemName', dataIndex: 'itemName', key: 'itemName', width: 90 },
    { title: 'description', dataIndex: 'description', key: 'description', responsive: ['lg'] },
    { title: 'category', dataIndex: 'category', key: 'category', width: 150 },
    { title: 'dateOfPayment', dataIndex: 'dateOfPayment', key: 'dateOfPayment', width: 150 },
    { title: 'amount', dataIndex: 'amount', key: 'amount', width: 70 },
    { title: 'modeOfPayment', dataIndex: 'modeOfPayment', key: 'modeOfPayment', width: 130 },
    { title: 'transactionMode', dataIndex: 'transactionMode', key: 'transactionMode', width: 130 },
    {
      title: 'Action',
      dataIndex: 'Action',
      fixed: 'right',
      width: 60,
      render: (_, record) => (
        <Space size="middle">
          <a type="link" onClick={() => showModal(record)}>
            <EditOutlined />
          </a>
          <Popconfirm title="Sure to delete" onConfirm={() => onDelete(record.Id)}>
            <a><DeleteOutlined /></a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = dataSource.filter(
      (item) => item.itemName.toLowerCase().includes(value)
    );
    setSearchedData(filteredData);
  };

  return (
    <div>
      <Row style={{ padding: '10px' }}>
        <Col span={5} offset={1}><strong>Transaction History</strong></Col>
        <Col span={8} offset={10} ><Search placeholder="Search" enterButton onChange={onChange} style={{justifyContent:'center', alignItems:'center'}}/></Col>
      </Row>
      <Table columns={columns} dataSource={searchedData || dataSource} scroll={{ x: 1300, y: 320 }} bordered size="small" pagination={{ pageSize: 5 }} />
      <Modal
        title="Edit Record"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="itemName">
            <Input
              value={editedRecord?.itemName}
              onChange={(e) => handleInputChange('itemName', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="description">
            <Input
              value={editedRecord?.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="category">
            <Input
              value={editedRecord?.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="dateOfPayment">
            <Input
              value={editedRecord?.dateOfPayment}
              onChange={(e) => handleInputChange('dateOfPayment', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="amount">
            <Input
              value={editedRecord?.amount}
              onChange={(e) => handleInputChange('amount', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="modeOfPayment">
            <Input
              value={editedRecord?.modeOfPayment}
              onChange={(e) => handleInputChange('modeOfPayment', e.target.value)}
            />
          </Form.Item>
          <Form.Item label="transactionMode">
            <Input
              value={editedRecord?.transactionMode}
              onChange={(e) => handleInputChange('transactionMode', e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TransactionForm;
