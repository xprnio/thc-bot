import { useCallback, useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

export default function useAuthentication() {
  const [store, setStore] = useContext(UserContext);

  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    authenticate : useCallback(async () => {
      const result = await fetch('');
      const { user } = await result.json();
      setStore({ user });
    }, [setStore]),
  };
}
