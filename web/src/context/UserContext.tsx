import React, { PropsWithChildren, useState } from 'react';
import { ContextType } from './types';

type UserContextType = {
  user: {} | null;
  isAuthenticated?: boolean;
};
const DEFAULT_CONTEXT: UserContextType = {
  user: null,
  isAuthenticated: true,
};

export const UserContext = React.createContext<ContextType<UserContextType>>([
  DEFAULT_CONTEXT,
  (state: UserContextType) => state,
]);

export default function WithUserContext(props: PropsWithChildren) {
  const [state, setState] = useState(DEFAULT_CONTEXT);
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}
