'use client';
import { Actions } from './Actions';
import { TableCell, TableRow, Typography } from '@ui/index';
import { useStates } from '@/hooks/useStates';
import { useMemo } from 'react';

const selectedRowNum = 0;
export function Rows() {
  const { tasks } = useStates();

  const arr = useMemo(
    () =>
      tasks.map((task) => (
        <TableRow key={task.id} hover selected={selectedRowNum === task.id}>
          <TableCell variant="body">
            <Typography variant="body2" textAlign="center">
              {task.id}
            </Typography>
          </TableCell>
          <TableCell variant="body">
            <Typography variant="body1" textAlign="left" paragraph margin={0}>
              {task.value}
            </Typography>
          </TableCell>
          <TableCell>
            <Actions /*editBtnHandler={() => editBtnHandler(task.id)} */ id={task.id} />
          </TableCell>
        </TableRow>
      )),
    [tasks]
  );
  return <>{arr}</>;
}
