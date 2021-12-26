import api from './api'

export const register = (user) => {
    console.log(user)
    return fetch(`${api.users}/register`, {
        mode: "cors",
        method: "post",
        headers: [
            ["Content-Type", "application/json"],
        ],
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}

export const login = (user) => {
    console.log(user)
    return fetch(`${api.users}/login`, {
        mode: "cors",
        method: "post",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include",
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}


export const update = () => {
    return fetch(`${api.users}/profile`, {
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

export const logout = () => {
    return fetch(`${api.users}/logout`, {
        mode: "cors",
        method: "post",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include",
    })
        .then(res => res.json())
        .catch(err => console.log('Handled error' + err));
}