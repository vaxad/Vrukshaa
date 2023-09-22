const url = "https://vruksha-server.onrender.com/profile/"
// const url = "http://localhost:3001/profile/"
// const url = "http://192.168.0.108:3001/profile/"

export const getUserData = async (data) => {
    
    try {
    const resp = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}catch(error){
    return []
}
}
