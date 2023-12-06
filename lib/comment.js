const url = `${process.env.NEXT_PUBLIC_SERVER}comment/`

export const likeComment = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}like/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    return resp  
} catch (error) {
    
}
}

export const unlikeComment = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}unlike/${data.commentId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    return resp  
} catch (error) {
    
}
}
