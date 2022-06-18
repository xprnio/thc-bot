export const fetchData = async (value: string) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/dashboard/${value}`
    const response = await fetch(endpoint)
    const resToJson = await response.json()
    return {data: resToJson.data, value: value};
}