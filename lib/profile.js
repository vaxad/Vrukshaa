const url = `${process.env.NEXT_PUBLIC_SERVER}profile/`

export const getUserData = async () => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData
}catch(error){
    return []
}
}
