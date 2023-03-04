import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function ToDoForm(props) {
  const { inputTextHandler, task, btnHandler, btnColor, btnText } = props;
  return (
    <Paper elevation={3}>
      <Box>
        <TextField
          id="taskText"
          label="Nueva Tarea"
          variant="standard"
          multiline
          onChange={inputTextHandler}
          value={task}
          sx={{ width: '80%' }}
        />
        <Button variant="contained" onClick={btnHandler} color={btnColor}>
          {btnText}
        </Button>
      </Box>
    </Paper>
  );
}
