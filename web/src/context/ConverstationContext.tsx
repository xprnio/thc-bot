import {createContext, PropsWithChildren, useEffect, useState } from "react"
import { ContextType } from './types';

type ConverstationContext = {
    key?: string;
    type?: 'information' | 'prompt' | 'options';
    content?: string[];
    pattern?: string;
    options?: ConverstationOption[];

    isLoaded: boolean;
}

type ConverstationOption = {
    key: string;
    label: string;
}

const DEFAULT_CONTEXT: ConverstationContext = {
    isLoaded: false,
};

export const ConverstationContext = createContext<ContextType<ConverstationContext>>([
    DEFAULT_CONTEXT,
    (state: ConverstationContext) => state,
]);

export function WithConverstationContext(props: PropsWithChildren) {
    const [state, setState] = useState(DEFAULT_CONTEXT);
    useEffect(() => {
        console.log(state);
    }, [state]) 
    return (
        <ConverstationContext.Provider value={[state, setState]}>
            {props.children}
        </ConverstationContext.Provider>
    )
}