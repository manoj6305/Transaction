import React,{useState,useRef} from 'react';
import './App.css';
import Form from './Form';
import { Switch, Upload, Button, Slider, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

  
  const App = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isToggleDisabled, setIsToggleDisabled] = useState(false);
    const [isSliderDisabled, setIsSliderDisabled] = useState(false);

    const handleButtonClick = () => {
      setIsToggleDisabled(!isToggleDisabled); 
    };
    const formRef = useRef();


  const formItems = [
    {
      label: "Toggle",
      name: "toggle",
      rules: [{ message:'please check the toggle' },],
      render: () => <Switch disabled={isToggleDisabled} checked={isToggleOn} onChange={(checked) => setIsToggleOn(checked)}  />,
    },
    {
      render: () =>(
         <Button 
           type="primary"
           onClick={handleButtonClick}
          >
           {isToggleDisabled ? 'Enable ' : 'Disable '}
        </Button>
      )
    },
    {
      label: "File Upload",
      name: "file",
      rules: [{ required: true, message: 'Please upload the file' }],
      render: () => (
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      ),
    },
    {
      label:'Toggle2',
      name:'toggle2' ,
      rules: [{ required: true, message: 'Please upload the file' }],
      render: () => <Switch checkedChildren='Yes' unCheckedChildren='No'/>,
    },
    {
      label:'Toggle3',
      name:'toggle3',
      render: () => <Switch loading={true}  />,
    },
    {
      label: "Slider",
      name: "slider",
      rules:[{ type: "number", min: 20, max: 200, message: "Please enter a number between 20 and 100" }],
      render: () => <Slider  step={10}  />,
    },
    {
      label:'Slider1',
      name:'slider1',
      render: () => <Slider range defaultValue={[20, 50]} disabled={isSliderDisabled} />,
    },
    {
      render: () => (
        <Button type="primary"
          onClick={() => setIsSliderDisabled(!isSliderDisabled)}
        >
          {isSliderDisabled ? 'Enable ' : 'Disable '}
        </Button>
      ),
    },
  ];
  
  return (
    <div >

      <Form formItems={formItems} formRef={formRef}/>

    </div>
  );
}

export default App;
