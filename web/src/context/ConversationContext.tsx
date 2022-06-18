import {createContext, PropsWithChildren, useEffect, useState } from "react"
import { ContextType } from './types';

type ConversationContextType = {
    key?: string;
    type?: 'information' | 'prompt' | 'options';
    content?: string[];
    pattern?: string;
    options?: ConversationOption[];

    isLoaded: boolean;
}

type ConversationOption = {
    key: string;
    label: string;
}

const DEFAULT_CONTEXT: ConversationContextType = {
    isLoaded: false,
};

export const ConversationContext = createContext<ContextType<ConversationContextType>>([
    DEFAULT_CONTEXT,
    (state: ConversationContextType) => state,
]);

export function WithConversationContext(props: PropsWithChildren) {
    const [state, setState] = useState(DEFAULT_CONTEXT);
    useEffect(() => {
        console.log(state);
    }, [state])
    return (
        <ConversationContext.Provider value={[state, setState]}>
            {props.children}
        </ConversationContext.Provider>
    )
}
