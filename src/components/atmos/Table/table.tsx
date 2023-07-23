import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

interface tableCol {
  [key: string]: string;
}

const col = [
  {
    col: "키/몸무게",
  },
  {
    col: "평소 사이즈",
  },
  {
    col: "구매 옵션",
  },
  {
    col: "착용 후기",
  },
];

const rows = [
  {
    keyVal: 1,
    spec: "170cm/69kg",
    usualSize: "S",
    buyOption: "L",
    review: "커요",
  },
  {
    keyVal: 2,
    spec: "180cm/69kg",
    usualSize: "L",
    buyOption: "XL",
    review: "적당해요",
  },
  {
    keyVal: 3,
    spec: "180cm/69kg",
    usualSize: "L",
    buyOption: "XL",
    review: "적당해요",
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="table">
        <TableHead className="table_header">
          <TableRow>
            {col.map((element: tableCol) => {
              return <TableCell align="center">{element.col}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.keyVal}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.spec}
              </TableCell>
              <TableCell align="center">{row.usualSize}</TableCell>
              <TableCell align="center">{row.buyOption}</TableCell>
              <TableCell align="center">{row.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
