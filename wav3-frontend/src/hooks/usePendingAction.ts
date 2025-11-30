import { useCallback } from 'react';
import type { PendingAction } from '../types';

const STORAGE_KEY = 'wav3_pending_action';

export const usePendingAction = () => {
  const saveAction = useCallback((action: PendingAction) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(action));
  }, []);

  const getAction = useCallback((): PendingAction | null => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }, []);

  const clearAction = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  const buildAuthRedirect = () => {
    const backend = import.meta.env.VITE_BACKEND_AUTH || 'http://localhost:3000/auth/login';
    const current = window.location.href;
    return `${backend}?redirect=${encodeURIComponent(current)}`;
  };

  return { saveAction, getAction, clearAction, buildAuthRedirect };
};
