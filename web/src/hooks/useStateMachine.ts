import { useCallback, useEffect, useMemo, useState } from 'react';

export type MachineState<T> = {
  key: string;
  data: T | null;
  onEnter?: () => void;
}

function useStateMachine<T>(initialStates: MachineState<T>[] = []) {
  const [states, setStates] = useState(initialStates);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);
  }, [states, setCurrent]);

  const currentState = useMemo(
    () => states[current],
    [states, current],
  );

  const nextState = useMemo(
    () => states[current + 1] || null,
    [states, current],
  );

  useEffect(() => {
    if (!currentState) return;
    if (!currentState.onEnter) return;

    currentState.onEnter();
  }, [currentState]);

  return {
    states, setStates,
    current, currentState,
    nextState,
    jump: useCallback((key: string) => {
      const index = states.findIndex(
        (state) => state.key === key,
      );
      if (index < 0) return;

      setCurrent(index);
    }, [states, setCurrent]),
    next: useCallback(() => {
      if (current === states.length - 1) return;
      setCurrent(current => current + 1);
    }, [states, current, setCurrent]),
  };
}

export default useStateMachine;
