import { useEffect, useMemo, useState } from 'react';
import useStateMachine, { MachineState } from './useStateMachine';

type Conversation = {
  key: string;
  type: string;
  content: string[];
}

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

  const [messages, setMessages] = useState<string[]>([]);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // TODO: Do GET /conversation request and update machine based on data
    const data = {
      key: 'onboarding.welcome',
      type: 'information',
      content: [
        'Hello',
        'I am Robert and I will be your personal AI trader',
        'I will be asking you a series of questions',
      ],
    };

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
  }, [setStates, setTyping, setVisible]);

  useEffect(() => {
    if (!nextState) return;

    const timeout = setTimeout(next, 750);

    return () => clearTimeout(timeout);
  }, [currentState, nextState, next]);

  return {
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
