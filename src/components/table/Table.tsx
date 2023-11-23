import { Paper, Table as MuiTable, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import * as React from 'react';
import { mockData } from '../../mock/mock';

interface TableProps {
}

const Table : React.FC<TableProps> = () => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">House Number&nbsp;(g)</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Zip Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.street}</TableCell>
              <TableCell align="right">{row.houseNumber}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.zipCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}

export default Table;