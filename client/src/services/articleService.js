import api from './api'

export const getAll = () => {
    return fetch(api.articles)
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}

export const postArticle = (article, id) => {
    return fetch(`${api.articles}`, {
        mode: "cors",
        method: "post",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include",
        body: JSON.stringify(article)
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}

export const getOne = (id) => {
    return fetch(`${api.articles}/${id}`, {
        mode: "cors",
        method: "get",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include",
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}