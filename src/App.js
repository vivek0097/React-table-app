import React, {useState} from "react";
import { BasicTable } from "./components/BasicTable";
import { ColumnHiding } from "./components/ColumnHiding";
import { ColumnOrder } from "./components/ColumnOrder";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";

// import "./App.css";
import FormOne from "./components/sectionone/FormOne";

import { DataList } from "./components/sectiontwo/DataList";
import { SortingTable } from "./components/SortingTable";


const App = () => {




 

 



  return (
    <div className="container">
     

  <FormOne /><hr></hr>
  <DataList />
  <BasicTable className='mt-5'/><br></br><hr></hr>
  <SortingTable /><br></br><hr></hr>
  <FilteringTable  /><br></br><hr></hr>
  <PaginationTable />
  <RowSelection />
  <ColumnOrder />
  <ColumnHiding />
 
    </div>
  );
};
export default App;
