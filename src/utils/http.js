import endPoint from '../config'


export async function post(resource = '', data = {}) {
    //mocking the response here.
    return new Promise((resolve, reject) => {

        setTimeout(() => resolve({data: "toli family I don't know why I have not used reject"}), 2000);
    })
    const response = await fetch(endPoint+resource, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export async function put(resource = '', data = {}) {
    const response = await fetch(endPoint + resource, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
export async function get(resource = '', data = {}) {
    const response = await fetch(endPoint + resource, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', 
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}