export const contactCreate = async (token, {first_name, last_name, email, phone}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            first_name, last_name, email, phone
        })
    })
}

export const contactList = async(token, {name, phone, email, page}) => {
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts`);

    if(name) url.searchParams.set('name', name);
    if(phone) url.searchParams.set('phone', phone);
    if(email) url.searchParams.set('email', email);
    if(page) url.searchParams.set('page', page);

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}

export const contactDelete = async(token, id) => {
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts/${id}`);

    return await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}


export const contactDetail = async(token, id) => {
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts/${id}`);

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}

export const contactUpdate = async (token, {id, first_name, last_name, email, phone}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            first_name, last_name, email, phone
        })
    })
}

export const addAddress = async (token, {id, street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            street, city, province, country, postal_code
        })
    })
}

export const listAddress = async (token, {id}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
        },

    })
}

export const addressDetail = async(token, contactID, addressID) => {
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts/${contactID}/addresses/${addressID}`);

    return await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}

export const addressUpdate = async (token, {id, addressId, street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            street, city, province, country, postal_code
        })
    })
}

export const addressDelete = async(token, id, addressId) => {
    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`);

    return await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    })
}