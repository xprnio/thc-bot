import { API_URL } from "../../constants"

export const fetchStrategyPreviews = async() => {
    const response = await fetch(`${API_URL}/strategies`)
    const resToJson = response.json()
    return resToJson
}