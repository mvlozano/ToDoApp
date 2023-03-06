'use client';
import React, { useReducer, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ToDoContainer() {
  const [task, setTask] = useState('');
  const [tasksList, dispatch] = useReducer(tasksListReducer, initialTasks);
  const [adding, setAdding] = useState(true);
  const [selectedRowNum, setSelectedRowNum] = useState(-1);
  const inputTxtHandler = (event: { target: { value: React.SetStateAction<string> } }): void => {
    setTask(event.target.value);
  };
  const addBtnHandler = (): void => {
    dispatch({ type: 'added', id: tasksList.length, value: task });
    setTask('');
  };
  const saveBtnHandler = (): void => {
    dispatch({ type: 'edited', id: selectedRowNum, value: task });
    setTask('');
    setAdding(true);
    setSelectedRowNum(-1);
  };
  const delBtnHandler = (row: number): void => {
    dispatch({ type: 'deleted', id: row });
    if (selectedRowNum > row) {
      setSelectedRowNum((prevNum) => --prevNum);
    } else if (selectedRowNum === row) {
      setTask('');
      setAdding(true);
      setSelectedRowNum(-1);
    }
  };

  const editBtnHandler = (row: number): void => {
    setSelectedRowNum(row);
    setTask(tasksList[row].value);
    setAdding(false);
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Box width={{ md: '50%', sm: '75%', xs: '95%' }}>
        <Paper elevation={3}>
          <ToDoForm
            inputTxtHandler={inputTxtHandler}
            task={task}
            btnHandler={adding ? addBtnHandler : saveBtnHandler}
            isBtnAdd={adding}
          />
        </Paper>
      </Box>
      <Box width={{ md: '50%', sm: '75%', xs: '95%' }}>
        <Paper elevation={3}>
          <ToDoList
            tasksList={tasksList}
            editBtnHandler={editBtnHandler}
            delBtnHandler={delBtnHandler}
            selectedRowNum={selectedRowNum}
          />
        </Paper>
      </Box>
    </Stack>
  );
}
function tasksListReducer(tasksList: Array<{ id: number; value: string }>, action: any) {
  switch (action.type) {
    case 'added': {
      return [...tasksList, { id: action.id, value: action.value }];
    }
    case 'edited': {
      const newTasksList = tasksList.slice();
      newTasksList[action.id].value = action.value;
      return newTasksList;
    }
    case 'deleted': {
      const newTasksList = tasksList.filter((task) => task.id !== action.id);
      console.log(action.id);
      console.log(newTasksList);
      return newTasksList;
    }
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}

const initialTasks = 'Something,'
  .repeat(10)
  .split(',', 10)
  .map((element, index) => ({ id: index, value: element + ` ${index}` }));
