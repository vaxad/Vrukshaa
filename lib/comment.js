const url = "https://vruksha-server.onrender.com/comment/"
// const url = "http://localhost:3001/post/"

export const likeComment = async (data) => {
    const resp = await fetch(`${url}like/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    return resp
}

export const unlikeComment = async (data) => {
    const resp = await fetch(`${url}unlike/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    return resp
}
