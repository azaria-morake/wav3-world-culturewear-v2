import api from './api';
import type { User } from '../types';

export const AuthService = {
  me: async (): Promise<User> => {
    const { data } = await api.get('/auth/me');
    return data;
  },
  login: async () => {
    // In a real app, this posts credentials. 
    // For Wav3 World redirect flow, we just handle the session check.
    // The actual login happens on the backend portal.
  },
  logout: async () => {
    await api.post('/auth/logout');
  }
};
