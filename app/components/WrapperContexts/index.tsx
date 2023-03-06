'use client';
import { PropsWithChildren, useReducer } from 'react';
import { DispatchContext, StateContext } from '@/contexts';
import { tasksListReducer } from '@/reducers';
import { initialTasks as tasks } from '@/utils';

export function WrapperContexts({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(tasksListReducer, { tasks, input: '' });
  console.log('WrapperContexts');
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
}
