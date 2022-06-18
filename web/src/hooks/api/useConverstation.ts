import { useCallback, useContext, useEffect, useMemo } from "react"
import { ConverstationContext } from "../../context/ConverstationContext"

type PostData = {
    key: string,
    value: string
}

export function useConverstation() {
    const [store, setStore] = useContext(ConverstationContext)

    useEffect(() => {
        const abort = new AbortController();
        const { signal } = abort;
        fetch('http://192.168.8.232:3000/conversation', { signal })
            .then((res) => res.json())
            .then(({data}) => {
                const {key, type, content, pattern, options} = data;
                setStore({ key,type,content,pattern,options, isLoaded: true });
            });

        return () => {
            abort.abort();
        }
    }, [setStore]);

    const respond = useCallback(async (payload: PostData) => {
        const result = await fetch('http://localhost:3333/conversation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const { data } = await result.json();
        setStore(data);
    }, [setStore]);

    const conversation = useMemo(() => {
        if (!store.isLoaded) {
            return null;
        }

        return {
            type: store.type,
            messages: store.content,
            options: store.options,
            pattern: store.pattern,
            key: store.key,
        }
    }, [store]);
    
    return [conversation, respond];
}