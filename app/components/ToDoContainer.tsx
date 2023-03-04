'use client';
import React, { createContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export const TestContext = createContext({ ok: false });

export default function ToDoContainer() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [addSaveBtn, setAddSaveBtn] = useState('add');
  const [btnColor, setBtnColor] = useState('primary');
  const [btnText, setBtnText] = useState('Añadir Tarea');
  const [ok, setOk] = useState(false);
  const addBtnHandler = () => {
    if (task !== '') {
      setTasksList((prevList) => {
        return [...prevList, { key: prevList.length, task }];
      });
    }
    console.log(tasksList);
    setTask('');
  };
  const saveBtnHandler = () => {};
  const inputTextHandler = (event) => {
    setTask(event.target.value);
  };
  return (
    <TestContext.Provider value={{ ok }}>
      <Grid container spacing={2} justifyContent={'center'} alignItems={'flex-start'}>
        <Grid item xs={4}>
          {/*<Button onClick={() => setOk(!ok)}>Add</Button>*/}
          <ToDoForm
            inputTextHandler={inputTextHandler}
            task={task}
            btnHandler={addSaveBtn === 'add' ? addBtnHandler : saveBtnHandler}
            btnColor={btnColor}
            btnText={btnText}
          />
        </Grid>
        <Grid item xs={6}>
          <ToDoList tasksList={tasksList} />
        </Grid>
      </Grid>
    </TestContext.Provider>
  );
}
