import React, {useState} from 'react'
import { Data } from './Data';

import * as XLSX from 'xlsx'
import './form.css'


function FormOne() {


  //on change states
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  

  console.log(excelFile);
//submit
const [excelData, setExcelData] = useState(null);

//handle file
const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
const handleFile = (e)=>{
  let selectedFile = e.target.files[0];
  console.log(e.target.files[0]);
  setExcelFile(e.target.files[0])
  if(selectedFile){
// console.log(selectedFile.type);
if(fileType==selectedFile.type){
   let reader = new FileReader();
   reader.readAsArrayBuffer(selectedFile);
   reader.onload=(e)=>{
     setExcelFileError(null);
    //  setExcelFile(e.target.files[0])
   }
}else{
setExcelFileError('please select only excel file types')
setExcelFile(null);
}
  } else{
    console.log('please select your file')
  }
}


//SUBMIT FUNCTION
const handleSubmit = (e) => {
e.preventDefault();
if(excelFile !== null){
  let reader = new FileReader();
  reader.readAsArrayBuffer(excelFile);
  reader.onload=(e)=>{
    const workbook = XLSX.read(e.target.result);
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = XLSX.utils.sheet_to_json(worksheet,{type:'buffer'});
    setExcelData(data)
  }

}else {
  setExcelData(null);
}
}
  return (
    <div className='container sec1 '>
       {/* upload file section */}
       <div className='form mt-5 ps-5'>
         <form className='form-group' autoComplete='off' onSubmit={handleSubmit}>
           <label className='mt-4'><h5>Upload Excell file</h5></label>
           <br></br>
           <input type='file' classname='form-control' required  onChange={handleFile} />
           {excelFileError&&<div className='text-danger mt-5'>{excelFileError}</div>}

           <button type='submit' className='btn btn-success mt-5 ' >Upload </button> 
         </form>
       </div>

       {/* view file section */}
            <h4 className='ps-5'>View Excel file</h4>
         <div className='viewer'>
          
           {excelData!==null&&(
             <div className='table-responsive'>
               <table className=' bg-sucess '>
                 <thead  className=''>
                   <tr className=''>
                     <th scope='col'>Id</th>
                     <th scope='col'>Fname</th>
                     <th scope='col'>Lname</th>
                     <th scope='col'>Place</th>
                     <th scope='col'>Age</th>
                   </tr>
                 </thead>
              <tbody >
                <Data excelData={excelData}  />
              
              </tbody>
               </table>
             </div>
           )}
         </div>

    </div>
  )
}

export default FormOne
