import React, { PropsWithChildren } from 'react';
import { ToDoForm } from './ToDoForm';
import { ToDoList } from './ToDoList';

import { Box, Paper, Stack } from '@ui/index';
import { WrapperContexts } from '@/components/WrapperContexts';

function BaseContainer({ children }: PropsWithChildren) {
  return (
    <Box width={{ md: '50%', sm: '75%', xs: '95%' }}>
      <Paper elevation={3}>{children}</Paper>
    </Box>
  );
}

export function ToDoContainer() {
  console.log('ToDoContainer');

  return (
    <WrapperContexts>
      <Stack spacing={2} alignItems="center">
        <BaseContainer>
          <ToDoForm />
        </BaseContainer>
        <BaseContainer>
          <ToDoList />
        </BaseContainer>
      </Stack>
    </WrapperContexts>
  );
}
