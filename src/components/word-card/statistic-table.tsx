import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  success: number,
  fail: number,
) {
  return {
    name,
    success,
    fail,
    difference: success - fail,
  };
}

const StatisticTable: FC = () => {
  const rows = [
    createData('Спринт', 159, 6.0),
    createData('Вызов', 237, 9.0),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Игра
            </TableCell>
            <TableCell align="right">Успех</TableCell>
            <TableCell align="right">Неудача</TableCell>
            <TableCell align="right">Разница</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.success}</TableCell>
              <TableCell align="right">{row.fail}</TableCell>
              <TableCell align="right">{row.difference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatisticTable;
