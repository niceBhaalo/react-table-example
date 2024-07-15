"use client";

import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns.jsx"; // Change the extension to .jsx
import MOCK_DATA from "./MOCK_DATA.json";
import SearchBar from "./searchBar.jsx"; // Change the extension to .jsx
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SearchBarColumn from "./searchBarColumn.js";
import TableInteractions from "./tableInteractions.jsx"; // Change the extension to .jsx
import { Box } from '@mui/material';
import "./table.css";

const TableComponent = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

  return (
    <>
      <TableInteractions />
      <Box display="flex" alignItems="center" flexDirection="column">
        <SearchBar filterTerm={globalFilter} setFilterTerm={setGlobalFilter} />
        <div style={{ overflowX: 'auto', width: 'min(95vw, 600px)' }}>
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, headerGroupIndex) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th {...column.getHeaderProps()} key={columnIndex}>
                      <div {...column.getSortByToggleProps()}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />) : ''}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, rowIndex) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={rowIndex}>
                    {row.cells.map((cell, cellIndex) => (
                      <td {...cell.getCellProps()} key={cellIndex}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
};

export default TableComponent;
