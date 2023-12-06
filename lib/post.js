const url = `${process.env.NEXT_PUBLIC_SERVER}post/`

export const makePosts = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        },
        body: JSON.stringify({ img: data.img, description: data.description })
    })
    const respData = await resp.json()
    //.log(respData)
    return respData
}catch{
    return null
}
}

export const getPosts = async () => {
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
    } catch (error) {
        return []
    }

}

export const getPost = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}find/${data.postId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData
} catch (error) {
    return null
}

}

export const likePost = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}like/${data.postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData
} catch (error) {

}
}

export const unlikePost = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}unlike/${data.postId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData
} catch (error) {
    
}
}

export const approvePost = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}approve/${data.postId}`, {
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

export const disapprovePost = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}disapprove/${data.postId}`, {
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

export const getComments = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}comments/${data.postId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData
} catch (error) {
    return []
}
}

export const postComment = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}comments/${data.postId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        },
        body: JSON.stringify({ message: data.message })
    })
    const respData = await resp.json()
    return respData
} catch (error) {
    return null
}
}