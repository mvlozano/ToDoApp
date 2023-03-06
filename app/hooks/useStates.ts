import { StateContext } from '@/contexts';
import { useContext } from 'react';

export function useStates() {
  const context = useContext(StateContext);
  if (!context) throw new Error('StateContext must be used within Provider');
  return context;
}
