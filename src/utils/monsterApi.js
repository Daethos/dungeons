import tokenService from './tokenService';
const BASE_URL = '/api/monsters/';

export async function getAll() {
    return fetch(BASE_URL, {
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then((res) => {
        if(res.ok) return res.json();
        return res.json().then(response => {
        console.log(response)
        throw new Error(response.err)
        })
    });
}

export async function create(monster) {
    console.log(monster, '<- monster in monsterAPI')
    return fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(monster),
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + tokenService.getToken(),
        
        },
        // options.headers = { 'Content-Type': 'application/json' };
        // options.body = JSON.stringify(payload);
    }).then((res) => {
        // console.log(res.json(), '<- res.json in create function')
        if (res.ok) return res.json(); 
        // res.ok will be try if the http statusCode in the response is anything in the 200's
        return res.json().then(response => {
        console.log(response, '<- What response are you getting?')
        throw new Error(response.err)
        })
    });
}