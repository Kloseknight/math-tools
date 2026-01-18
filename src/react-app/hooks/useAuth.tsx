
import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { auth } from '@/firebase/config';
import { onAuthStateChanged, User, getRedirectResult } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    const checkRedirect = async () => {
        try {
            await getRedirectResult(auth);
        } catch (error) {
            console.error(error);
        }
    }
    checkRedirect();

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
