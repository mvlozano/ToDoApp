import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function ToDoForm({ inputTxtHandler, task, btnHandler, isBtnAdd }) {
  const btnColor = isBtnAdd ? 'primary' : 'secondary';
  const btnTxt = isBtnAdd ? 'Add Task' : 'Save';
  const disabled = task.length === 0;
  return (
    <Box display="flex" alignItems="center" justifyContent="space-evenly" flexWrap="wrap">
      <TextField
        id="taskText"
        label="New Task"
        variant="standard"
        multiline
        onChange={inputTxtHandler}
        value={task}
        sx={{ minWidth: '40%' }}
      />
      <Button variant="contained" onClick={btnHandler} color={btnColor} disabled={disabled}>
        {btnTxt}
      </Button>
    </Box>
  );
}
