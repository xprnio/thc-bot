import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Conversation, FetchConversation, getConversation, selectData } from '../features/conversation/conversationSlice';
import useStateMachine, { MachineState } from './useStateMachine';


const mapToState = (
  conversation: Conversation,
  onTyping: (index: number) => void,
  onSend: (index: number) => void,
): MachineState<string>[] => {
  const messageKey = (index: number) => `${conversation.key}.${index}`;
  return conversation.content.reduce((result, message, index) => {
    return [
      ...result,
      {
        key: `${messageKey(index)}.typing`,
        data: null,
        onEnter: () => onTyping(index),
      },
      {
        key: messageKey(index),
        data: message,
        onEnter: () => onSend(index),
      },
    ];
  }, [] as MachineState<string>[]);
};

function useConversation() {
  const machine = useStateMachine();
  const { currentState, nextState, next, setStates } = machine;

  const data = useAppSelector(selectData)
  const dispatch = useAppDispatch()
  const [messages, setMessages] = useState<string[]>([]);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const submitData: FetchConversation = {
    username: 'test',
    type: 'GET',
  }

  useEffect(() => {
    dispatch(getConversation(submitData))
  }, [dispatch]);

  useEffect(() => {

    if (!data) return;

    const states = mapToState(
      data,
      (index) => {
        setTyping(true);
        setVisible(index);
      },
      (index) => {
        setTyping(false);
        setVisible(index + 1);
      },
    );
    setMessages(data.content);
    setStates(states);
  }, [data, setStates, setTyping, setVisible]);

  useEffect(() => {
    if (!nextState) return;

    const timeout = setTimeout(next, 750);

    return () => clearTimeout(timeout);
  }, [currentState, nextState, next]);

  return {
    conversation: data,
    currentState,
    machine,
    messages: useMemo(
      () => messages.slice(0, visible),
      [messages, visible],
    ),
    isTyping: typing,
  };
}

export default useConversation;
