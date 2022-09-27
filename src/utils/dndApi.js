import tokenService from './tokenService';
const BASE_URL = '/api/dndapi/';



export async function index() {

    try {
        return fetch(BASE_URL, {
            // method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokenService.getToken()
            }
        })
        .then((res) => {
            console.log(res, '<- And what does this look like?')
            console.log(res.json(), '<- res.json in util')
            if(res.ok) return res.json();
            return res.json().then(response => {
            console.log(response, '<- Proper Response in dndAPI utility')
            throw new Error(response.err)
            })
        });
    } catch (err) {
        console.log(err.message, '<- Error in the dndAPI utility')
    }
    // await fetch(BASE_URL, {
    //     headers: {
    //     'Authorization': 'Bearer ' + tokenService.getToken()
    //     }
    // })
    // .then((res) => {
    //     if(res.ok) return res.json();
    //     return res.json().then(response => {
    //     console.log(response)
    //     throw new Error(response.err)
    //     })
    // });
}