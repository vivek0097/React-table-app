import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import './table.css'
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";



const objectToCsv = function(res){

  const csvRows = [];
  //get the header
  const headers = Object.keys(res[0]);
  csvRows.push(headers.join(','));

  console.log(headers);
  //loop over the row

  //form escaped comma seprated values

}

export const FilteringTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  

  //for download
 const res = data.map(row => ({
   first_name: row.first_name,
   last_name: row.last_name,
 }))
 console.log(res)


 const csvData = objectToCsv(res)
 //--------------
  //disable column filter
  const defaultColumn = useMemo(() => {
    return {
Filter: ColumnFilter

    }
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter, } = useTable({
    columns,
    data,
    defaultColumn
  },
  useFilters,
  useGlobalFilter);

  const {globalFilter} = state

    
 

  return (
      <>
      <div className="container sec-4 mt-5">
          <h1 className="text-muted">Global Filtering</h1>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
      <thead>
          {
              headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps}>
                    {
                        headerGroup.headers.map( (column) =>(
                          <th {...column.getHeaderProps()}>{column.render("Header")}
                          <div>{column.canFilter ? column.render('Filter') : null}</div>
                          </th>
                        ))
                    }
                
              </tr>
              ))
          }
       
      </thead>
      <tbody {...getTableBodyProps()}>
          {
              rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell) => {
                               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                            })
                        }
                  </tr>
                  )
              })
          }
      
      </tbody>
      <tfoot>
        {footerGroups.map(footerGroup => (
          <tr{...footerGroup.getFooterGroupProps()} >
         {
           footerGroup.headers.map(column => (
             <td {...column.getFooterProps}>
              {
                column.render('Footer')
              }
             </td>
           ))
         }
          </tr>
        ))}
      
      </tfoot>
    </table>
    </div>
    </>
  );
};
