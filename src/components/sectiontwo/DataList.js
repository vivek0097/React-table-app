import React, {useState} from 'react'

import * as XLSX from 'xlsx'


export const DataList = () => {
const [fileName, setFileName] = useState(null);



 const handleFile = async (e) => {
  const file = e.target.files[0];
  setFileName(file.name)

  const data = await file.arrayBuffer();
  const workbook = XLSX.readFile(data, {sheetRows: 6});
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: '',
  })
     console.log(jsonData);
 }

  return (
    <div className='container mt-5'>
     <h1>excell data</h1>
     {fileName && (
         <p>FileName: <span>{fileName}</span></p>
     )}
     <input type='file' onChange={(e) => handleFile(e)} />
    </div>
  )
}
