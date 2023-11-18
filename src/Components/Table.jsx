import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable() {
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => setTableData(data));
  };

  useEffect(() => getData(), []);
  const tableHeading = ["Date", "Reading"];

  return (
    <div className="w-full justify-center flex">
      <div className="w-5/6">
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 540 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow className="border-2 border-black">
                  {tableHeading.map((heading) => (
                    <TableCell
                      key={heading}
                      align="center"
                      className="!bg-gray-800 !text-white border"
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {tableData.map((data) => (
                  <TableRow key={data.id} className="w-full">
                    <TableCell align="center" className="w-3/6 border">
                      {data.date}
                    </TableCell>

                    <TableCell align="center" className="flex border w-3/6">
                      {data.number}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
