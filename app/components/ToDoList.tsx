import Stack from '@mui/material/Stack';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { TestContext } from '@/components/ToDoContainer';

function TasksTable(props) {
  const { tasksList, editBtnHandler, delBtnHandler } = props;
  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align="left" variant={'head'} size={'small'}>
            ID Tarea
          </TableCell>
          <TableCell align="left" variant={'head'}>
            Descripción
          </TableCell>
          <TableCell align="right" variant={'head'}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasksList.map((task) => (
          <TableRow key={task.key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} hover>
            <TableCell align="left" variant={'body'}>
              <Typography variant={'body2'}>{task.key}</Typography>
            </TableCell>
            <TableCell align="left" variant={'body'}>
              <Typography variant={'body2'} paragraph align={'center'}>
                {task.task}
              </Typography>
            </TableCell>
            <TableCell align="right" variant={'body'}>
              <EditButtons editBtnHandler={editBtnHandler} delBtnHandler={delBtnHandler} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function TasksToolBar(props) {
  return (
    <Toolbar>
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
        Tareas Pendientes
      </Typography>
    </Toolbar>
  );
}

function EditButtons(props) {
  const { editBtnHandler } = props;
  return (
    <Grid container>
      <Grid item>
        <Tooltip title="Edit">
          <IconButton onClick={editBtnHandler}>
            <Edit />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default function ToDoList({ tasksList }) {
  const ctx = useContext(TestContext);
  return (
    <Paper elevation={3}>
      {/*<Typography variant="h1">{ctx.ok ? 'True' : 'False'}</Typography>*/}
      <Stack spacing={0}>
        <TasksToolBar />
        <TableContainer sx={{ height: '500px' }}>
          <TasksTable tasksList={tasksList} />
        </TableContainer>
      </Stack>
    </Paper>
  );
}
