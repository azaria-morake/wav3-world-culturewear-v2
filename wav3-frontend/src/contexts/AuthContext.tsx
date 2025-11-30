import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '../types';
import { AuthService } from '../services/auth';
import { usePendingAction } from '../hooks/usePendingAction';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginRedirect: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { buildAuthRedirect } = usePendingAction();

  useEffect(() => {
    AuthService.me()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  const loginRedirect = () => {
    window.location.href = buildAuthRedirect();
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, loginRedirect }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
