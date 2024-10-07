const baseURL = import.meta.env.VITE_HOST

// function to make POST request 
async function makeRequest(route, data) {

    const API_ROUTE = baseURL+route
    // console.log(API_ROUTE)
    const response = await fetch(API_ROUTE, {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.json()
}

// function to make GET request
async function makeGetRequest(route) {

    console.log(baseURL, route)
}

export { makeRequest, makeGetRequest }