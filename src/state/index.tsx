import { createContext, useContext, useState, ReactNode } from 'react';
import { AppProviderProps } from '../types';

export const AppStateContext = createContext({});

export function AppProvider({ children }: AppProviderProps) {
  const value = useState({
    addon: [],
    email: '',
    name: '',
    plan: 'arcade',
    tel: '',
    toggle: 'monthly',
  });
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}
