import { API_URL } from '../../constants';
import { FetchConversation } from './conversationSlice';

export async function fetchConversation({username, type, payload}: FetchConversation) {
    const endpoint = `${API_URL}/conversation/${username}`
    const res = await fetch(endpoint, {
        method: type,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    return res.json();
}
