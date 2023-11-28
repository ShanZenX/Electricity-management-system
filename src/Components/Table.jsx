import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ data }) {
  const tableHeading = ["Date", "Reading"];

  return (
    <div className="w-full justify-center flex pb-4 pt-4 h-full">
      {data ? (
        <div className="w-5/6">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
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
                  {data.map((data) => (
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
      ) : (
        <div className="flex justify-center items-center h-full -mt-6">
          <h1 className="bg-gray-200 font-sans font-bold p-16 rounded-md">
            Please select a filter to view data{" "}
          </h1>
        </div>
      )}
    </div>
  );
}
