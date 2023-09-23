// const url = "https://vruksha-server.onrender.com/article/"
// const url = "http://localhost:3001/article/"
// const url = "http://192.168.0.108:3001/article/"
const url = `${process.env.NEXT_PUBLIC_SERVER}article/`


export const makeArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
    const resp = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        },
        body: JSON.stringify({ title: data.title, description: data.description, tags: data.tags })
    })
    const respData = await resp.json()
    //.log(respData)
    return respData
       
} catch (error) {
    return null
}

}

export const getArticles = async () => {
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
    return {articles:[]}
}

}

export const getArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}find/${data.articleId}`, {
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

export const likeArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}like/${data.articleId}`, {
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

export const unlikeArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}unlike/${data.articleId}`, {
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

export const approveArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}approve/${data.articleId}`, {
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

export const disapproveArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}disapprove/${data.articleId}`, {
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

export const getCommentsForArticle = async (data) => {
    const token = localStorage.getItem('token')
    try {
        
    const resp = await fetch(`${url}comments/${data.articleId}`, {
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

export const articleComment = async (data) => {
    const token = localStorage.getItem('token')
    try {
     
    const resp = await fetch(`${url}comments/${data.articleId}`, {
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