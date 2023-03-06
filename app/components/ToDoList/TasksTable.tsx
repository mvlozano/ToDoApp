import { Rows } from './Rows';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@ui/index';

export function TasksTable() {
  console.log('TasksTable');
  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell variant="head" size="small">
              <Typography variant="subtitle1" textAlign="center">
                Task ID
              </Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="subtitle1" textAlign="left">
                Description
              </Typography>
            </TableCell>
            <TableCell variant="head" size="small">
              <Typography variant="subtitle1" textAlign="center">
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Rows />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
