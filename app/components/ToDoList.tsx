import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function TasksTable({ tasksList, editBtnHandler, delBtnHandler, selectedRowNum }) {
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
          {tasksList.map((task: { key: number; value: string }, index: number) => (
            <TableRow key={index} hover selected={selectedRowNum === index}>
              <TableCell variant="body">
                <Typography variant="body2" textAlign="center">
                  {task.key}
                </Typography>
              </TableCell>
              <TableCell variant="body">
                <Typography variant="body1" textAlign="left" paragraph margin={0}>
                  {task.value}
                </Typography>
              </TableCell>
              <TableCell>
                <Buttons editBtnHandler={() => editBtnHandler(index)} delBtnHandler={() => delBtnHandler(index)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function Buttons({ editBtnHandler, delBtnHandler }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Tooltip title="Edit">
        <IconButton onClick={editBtnHandler}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={delBtnHandler}>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default function ToDoList({ tasksList, editBtnHandler, delBtnHandler, selectedRowNum }) {
  return (
    <Stack spacing={0} maxHeight="80vh">
      <Toolbar>
        <Typography variant="h6">Pending Tasks</Typography>
      </Toolbar>
      <TasksTable
        tasksList={tasksList}
        editBtnHandler={editBtnHandler}
        delBtnHandler={delBtnHandler}
        selectedRowNum={selectedRowNum}
      />
    </Stack>
  );
}
