import fetch from 'node-fetch';

export async function getTest() {
    const requestOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
    };
    try {
        const response = await fetch("http://localhost:8080/test", requestOptions);
        const responseJSON = await response.json()
        console.log(responseJSON)
        return responseJSON;
    } catch (error) {
        console.log(error.toString())
        return {foo: "KO"};
    }
}