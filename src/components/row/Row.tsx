import { TableCell, TableRow } from "@mui/material";
import * as React from "react";
import { Top100Product } from "../../services/api/api.types";

interface RowProps {
  oneElementTop100DataResponse: Top100Product;
  index: number;
}

const Row: React.FC<RowProps> = (props) => {
  return (
    <TableRow
      key={props.oneElementTop100DataResponse.userId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {props.index}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.oneElementTop100DataResponse.userId}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.oneElementTop100DataResponse.userDisplayName}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.oneElementTop100DataResponse.numSpecies}
      </TableCell>
      <TableCell component="th" scope="row">
        {props.oneElementTop100DataResponse.numCompleteChecklists}
      </TableCell>
    </TableRow>
  );
};

export default Row;
