import { FetchConversation } from './conversationSlice';

export async function fetchConversation({username, type, payload}: FetchConversation) {
    const endpoint = `http://10.2.113.112:3000/conversation/${username}`
    const res = await fetch(endpoint, {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    return res.json();
}
