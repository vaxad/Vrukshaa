const url = "https://vruksha-server.onrender.com/profile/"
// const url = "http://localhost:3001/post/"

export const getUserData = async (data) => {
    const resp = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}
