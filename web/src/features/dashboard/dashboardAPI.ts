import { API_URL } from "../../constants";

export const fetchData = async (value: string) => {
    const endpoint = `${API_URL}/dashboard/${value}`
    const response = await fetch(endpoint)
    const resToJson = await response.json()
    return {data: resToJson.data, value: value};
}