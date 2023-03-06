import { DispatchContext } from '@/contexts';
import { useContext } from 'react';

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (!context) throw new Error('DispatchContext must be used within Provider');
  return context;
}
