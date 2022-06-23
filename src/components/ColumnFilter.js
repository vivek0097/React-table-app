import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column

  return (
    <span className="text-dark">
      Search:{' '}<br></br>
      <input className="w-100"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
