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