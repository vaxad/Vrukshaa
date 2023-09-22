const url = "https://vruksha-server.onrender.com/comment/"
// const url = "http://localhost:3001/comment/"
// const url = "http://192.168.0.108:3001/comment/"

export const likeComment = async (data) => {
    try {
    const resp = await fetch(`${url}like/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    return resp  
} catch (error) {
    
}
}

export const unlikeComment = async (data) => {
    try {
    const resp = await fetch(`${url}unlike/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    return resp  
} catch (error) {
    
}
}
