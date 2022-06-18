import { FetchConverstation } from "./converstationSlice"

export async function fetchConverstation({username, type, payload}: FetchConverstation) {
    const endpoint = 'http://10.2.113.112:3000/conversation/' + username
    const res = await fetch(endpoint, {
        method: type,
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload && JSON.stringify(payload)
    })
    const resToJson = await res.json()
    return resToJson
}