'use client';
import Button from '@mui/material/Button';
import { useDispatch } from '@/hooks/useDispatch';
import { useCallback } from 'react';

export function Btn() {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch({ type: 'added' });
  }, []);

  console.log('Btn');
  // const btnColor = isBtnAdd ? 'primary' : 'secondary';
  // const btnTxt = isBtnAdd ? 'Add Task' : 'Save';
  // const disabled = task.length === 0;
  return (
    <Button variant="contained" onClick={onClick} /* color={btnColor} disabled={disabled}*/>
      {/*{btnTxt}*/}Add Task
    </Button>
  );
}
