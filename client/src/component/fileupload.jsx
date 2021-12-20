import React, { Fragment,useState,useEffect} from "react";
import axios from 'axios';
export const FileUpload = () => {

const [file,setFile]=useState('');
const [fileName,setFileName]=useState('Choose File')
const [uploadedFile,setUploadedFile]=useState({})

const filehandler =(e)=>{
  setFile(e.target.files[0]);
  setFileName(e.target.files[0]);
}

const submithandler = async (e)=>{
e.preventDefault();
const formData = new FormData();
formData.append('file',file);
 
try{
const res = await axios.post('/upload',formData,
{
  headers:{
    'Content-Type':'multipart/form-data'
  }
})
const {fileName,filePath} =res.data;
setUploadedFile({fileName,filePath})
}catch(err){
if (err.res.status ===500){
  console.log("There was a problem with the server")
}
else{
  console.log(err.res.data.msg);
}
}
}





  return (
    <Fragment>
      <form onSubmit={submithandler}>
      <div className='custom-file mt-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={filehandler}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {fileName}
          </label>
        </div>


        <input
          type='submit'
          value='Upload'
          className='btn btn-outline-dark btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};
