const url = "https://vruksha-server.onrender.com/article/"
// const url = "http://localhost:3001/article/"

export const makeArticle = async (data) => {
    const resp = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        },
        body: JSON.stringify({ title: data.title, description: data.description, tags: data.tags })
    })
    const respData = await resp.json()
    //.log(respData)
    return respData
}

export const getArticles = async (token) => {
    const resp = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': token
        }
    })
    const respData = await resp.json()
    return respData

}

export const getArticle = async (data) => {
    const resp = await fetch(`${url}find/${data.articleId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData

}

export const likeArticle = async (data) => {
    const resp = await fetch(`${url}like/${data.articleId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}

export const unlikeArticle = async (data) => {
    const resp = await fetch(`${url}unlike/${data.articleId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}

export const approveArticle = async (data) => {
    const resp = await fetch(`${url}approve/${data.articleId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}

export const disapproveArticle = async (data) => {
    const resp = await fetch(`${url}disapprove/${data.articleId}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}

export const getCommentsForArticle = async (data) => {
    const resp = await fetch(`${url}comments/${data.articleId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        }
    })
    const respData = await resp.json()
    return respData
}

export const articleComment = async (data) => {
    const resp = await fetch(`${url}comments/${data.articleId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'authToken': data.token
        },
        body: JSON.stringify({ message: data.message })
    })
    const respData = await resp.json()
    return respData
}