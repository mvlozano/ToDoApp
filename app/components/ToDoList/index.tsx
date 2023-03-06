import { TasksTable } from './TasksTable';
import { Stack, Toolbar, Typography } from '@ui/index';

export function ToDoList() {
  console.log('ToDoList');
  return (
    <Stack spacing={0} maxHeight="80vh">
      <Toolbar>
        <Typography variant="h6">Pending Tasks</Typography>
      </Toolbar>
      <TasksTable />
    </Stack>
  );
}
