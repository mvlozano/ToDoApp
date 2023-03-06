'use client';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useCallback } from 'react';
import { useStates } from '@/hooks/useStates';
import { useDispatch } from '@/hooks/useDispatch';

export function Input() {
  const { input } = useStates();
  const dispatch = useDispatch();
  console.log('Input');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'input', input: e.target.value });
  }, []);

  return (
    <TextField
      id="taskText"
      label="New Task"
      variant="standard"
      multiline
      onChange={onChange}
      value={input}
      sx={{ minWidth: '40%' }}
    />
  );
}
