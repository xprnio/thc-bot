export const fetchProfits = async () => {
    const endpoint = 'http://10.2.113.112:3000/dashboard/profits'
    const response = await fetch(endpoint)
    const resToJson = await response.json()
    return resToJson;
}

export const fetchAssets = async () => {
    const endpoint = 'http://10.2.113.112:3000/dashboard/assets'
    const response = await fetch(endpoint)
    const resToJson = await response.json()
    return resToJson;
}

