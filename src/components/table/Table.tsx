import {
  Paper,
  Table as MuiTable,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import * as React from "react";
import { Top100ProductDTO } from "../../services/api/api.types";
import Row from "../row/Row";

interface TableProps {
  top100DataResponse: Top100ProductDTO;
}

const Table: React.FC<TableProps> = (props) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">User ID</TableCell>
            <TableCell align="right">User name</TableCell>
            <TableCell align="right">Species number</TableCell>
            <TableCell align="right">Nr Complete Checkilist nr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.top100DataResponse.map((row, index) => (
            <Row oneElementTop100DataResponse={row} index={index} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
