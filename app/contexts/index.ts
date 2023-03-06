'use client';
import { createContext } from 'react';
import { StateType } from '@/reducers';

export const StateContext = createContext<StateType>({} as StateType);
export const DispatchContext = createContext({} as any);
