import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Conversation, getConversation, selectData } from '../features/conversation/conversationSlice';
import useStateMachine, { MachineState } from './useStateMachine';

const mapToState = (
  conversation: Conversation,
  onTyping: (index: number) => void,
  onSend: (index: number) => void,
): MachineState<{ key: string; message?: string }>[] => {
  const messageKey = (index: number) => `${conversation.key}.${index}`;
  return conversation.content.reduce((result, message, index) => {
    return [
      ...result,
      {
        key: `${messageKey(index)}.typing`,
        data: { key: messageKey(index) },
        onEnter: () => {
          onTyping(index);
        },
      },
      {
        key: messageKey(index),
        data: { key: messageKey(index), message },
        onEnter: () => {
          onSend(index);
        },
      },
    ];
  }, [] as MachineState<{ key: string; message?: string }>[]);
};

function useConversation() {
  const machine = useStateMachine();
  const { states, currentState, nextState, next, setStates } = machine;

  const data = useAppSelector(selectData);
  const dispatch = useAppDispatch();
  const [messages, setMessages] = useState<string[]>([]);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!states) return;

    setTyping(true);
    setVisible(0);
  }, [states, setTyping, setVisible]);

  useEffect(() => {
    dispatch(getConversation({
      username: 'George',
      type: 'GET',
    }));
  }, [dispatch]);

  useEffect(() => {
    if (!data) return;

    const states = mapToState(
      data,
      () => {
        setTyping(true);
      },
      (index) => {
        setVisible(index + 1);
        setTyping(false);
      },
    );
    setMessages(data.content);
    setStates(states);
  }, [data, setStates, setTyping, setVisible]);

  useEffect(() => {
    const timeout = setTimeout(next, 750);
    return () => clearTimeout(timeout);
  }, [nextState, next]);

  return {
    conversation: data,
    currentState,
    allowInput: useMemo(
      () => !typing && !nextState,
      [typing, nextState],
    ),
    machine,
    messages: useMemo(
      () => messages.slice(0, visible),
      [messages, visible],
    ),
    isTyping: typing,
    isComplete: useMemo(
      () => visible === messages.length,
      [messages, visible],
    ),
    isLast: useMemo(() => {
      if (!data) return false;
      return data.is_last;
    }, [data]),
  };
}

export default useConversation;
