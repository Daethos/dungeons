import tokenService from './tokenService';
const BASE_URL = '/api/deepai/';

export async function getDeep(deep) {
    return fetch(BASE_URL, {
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: deep
    })
    .then((res) => {
        if(res.ok) return res.json();
        return res.json().then(response => {
        console.log(response)
        throw new Error(response.err)
        })
    });
}