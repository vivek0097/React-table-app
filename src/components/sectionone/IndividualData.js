import React from 'react'

export const IndividualData = ({IndividualExcelData}) => {
  return (
<>
<th>{IndividualExcelData.Id}</th>
<th>{IndividualExcelData.Fname}</th>
<th>{IndividualExcelData.Lname}</th>
<th>{IndividualExcelData.Place}</th>
<th>{IndividualExcelData.Age}</th>
</>
  )

}
