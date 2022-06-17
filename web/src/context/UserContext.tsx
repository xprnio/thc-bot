import React, { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { ContextType } from './types';

type UserContext = {
  user: {} | null;
  isAuthenticated?: boolean;
};
const DEFAULT_CONTEXT: UserContext = {
  user: null,
  isAuthenticated: true,
};

export const UserContext = React.createContext<ContextType<UserContext>>([
  DEFAULT_CONTEXT,
  (state: UserContext) => state,
]);

export default function WithUserContext(props: PropsWithChildren) {
  const [state, setState] = useState(DEFAULT_CONTEXT);
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}
