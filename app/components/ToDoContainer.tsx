'use client';
import React, { createContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function ToDoContainer() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState(
    'Something,'
      .repeat(10)
      .split(',', 10)
      .map((element, index) => ({ key: index, value: element + ` ${index}` }))
  );
  const [adding, setAdding] = useState(true);
  const [selectedRowNum, setSelectedRowNum] = useState(-1);
  const addBtnHandler = () => {
    setTasksList((prevList: { value: string; key: number }[]) => {
      return [...prevList, { key: prevList.length, value: task }];
    });
    setTask('');
  };
  const saveBtnHandler = () => {
    setTasksList((prevList: { value: string; key: number }[]) => {
      const newTasksList = prevList.slice();
      newTasksList[selectedRowNum].value = task;
      return newTasksList;
    });
    setTask('');
    setAdding(true);
    setSelectedRowNum(-1);
  };
  const inputTxtHandler = (event: { target: { value: React.SetStateAction<string> } }) => {
    setTask(event.target.value);
  };

  const editBtnHandler = (row: number) => {
    setSelectedRowNum(row);
    setTask(tasksList[row].value);
    setAdding(false);
  };
  const delBtnHandler = (row: number) => {
    setTasksList((prevList) => {
      const leftHalf = prevList.slice(0, row);
      const rightHalf = prevList.slice(row + 1);
      return [...leftHalf, ...rightHalf.map((task, index) => ({ key: row + index, value: task.value }))];
    });
    if (selectedRowNum > row) {
      setSelectedRowNum((prevNum) => --prevNum);
    } else if (selectedRowNum === row) {
      setTask('');
      setAdding(true);
      setSelectedRowNum(-1);
    }
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
