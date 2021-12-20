import React, { Fragment,useState} from "react";

export const FileUpload = () => {

const [file,setFile]=useState('');
const [fileName,setFileName]=useState('Choose File')

const filehandler =(e)=>{
  setFile(e.target.files[0]);
  setFileName(e.target.files[0]);
}

  return (
    <Fragment>
      <form>
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
