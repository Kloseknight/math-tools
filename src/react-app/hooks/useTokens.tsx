import { useState, useEffect } from 'react';
import { useAuth } from '@getmocha/users-service/react';

export function useTokens() {
  const { user } = useAuth();
  const [tokenCount, setTokenCount] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTokenBalance = async () => {
    if (!user) {
      setTokenCount(null);
      setIsAdmin(false);
      return;
    }

    try {
      const response = await fetch('/api/tokens/balance');
      if (response.ok) {
        const data = await response.json();
        setTokenCount(data.tokenCount);
        setIsAdmin(data.isAdmin || false);
      }
    } catch (error) {
      console.error('Failed to fetch token balance:', error);
    }
  };

  const useToken = async (): Promise<boolean> => {
    if (!user) return false;

    setIsLoading(true);
    try {
      const response = await fetch('/api/tokens/use', {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setTokenCount(data.tokenCount);
        return true;
      }

      if (response.status === 403) {
        setTokenCount(0);
        return false;
      }

      return false;
    } catch (error) {
      console.error('Failed to use token:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTokenBalance();
  }, [user]);

  return {
    tokenCount,
    isAdmin,
    isLoading,
    useToken,
    refreshBalance: fetchTokenBalance,
  };
}
