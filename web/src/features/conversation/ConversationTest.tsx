import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { FetchConversation, getConversation, selectContent } from "./conversationSlice"

export const ConverstationTest = () => {
    const [value, setValue] = useState('')
    const content = useAppSelector(selectContent)
    const dispatch = useAppDispatch()
    const initialGetConverstationData: FetchConversation = {
        username: 'test',
        type: 'GET'
    }
    const submitFunction = () => {
        const getConverstationData: FetchConversation = {
            username: 'test',
            type: 'POST',
            payload: {
                value: value
            }
        }
        dispatch(getConversation(getConverstationData))
    }
    useEffect(() => {
        dispatch(getConversation(initialGetConverstationData))
    }, [])
    return(
        <main>
            <p>
                {content}
            </p>
            <input type="text" value={value} onChange={(e: any) => setValue(e.target.value)}/>
            <button onClick={() => submitFunction()} >SUBMIT</button>
        </main>
    )
}