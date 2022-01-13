import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className='container mt-5'>
    <h1 className='display-5 text-center mb-4'>
      <i className='fab fa-react' /> React File Upload
    </h1>

    <FileUpload />
  </div>
);

export default App;
