import React,{Component} from 'react';
import { FileUpload } from './component/fileupload';
import { FaReact } from 'react-icons/fa';
import './App.css';

const App = () => (
    <div className="container mt-4">
    <h1 className='display-4 text-center m4-4'>
    <FaReact className='App-logo' /> React File upload
    </h1>
    <FileUpload />
    </div>
  );


export default App;
