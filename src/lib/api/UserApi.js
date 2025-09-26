export const userRegister = async ({username, password, name}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username, password, name
        })
    })
}

export const userLogin = async ({username, password}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    })
}

export const userUpdateProfile = async (token, {name}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            name
        })
    })
}

export const userUpdatePassword = async (token, {pass}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({
            pass
        })
    })
}

export const userDetail = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}

export const userLogout = async (token) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/users/logout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
}