const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Monster = require('../models/monster');
const bcrypt = require('bcrypt');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const monsterUrl = 'https://www.dnd5eapi.co/api/monsters/'
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
};

module.exports = {
    index
}

async function index(req, res) {
    console.log('And did we make it to the index in the controller?')

    try {
        const response = await fetch(monsterUrl, options)
        // console.log(response, '<- Response in the index controller');
        .then((res) => {
            console.log(res, '<- And what does this look like?')
            if(res.ok) return res.json();
            return res.json().then(response => {
            console.log(response, '<- Proper Response in dndAPI utility')
            throw new Error(response.err)
            })
        });

        // if (response.ok) {
        // const data = await response.json();
        // console.log(data.results, '<- Monster Data!');
        // }

        // const fetch = await fetch(monsterUrl, {
        //     method: 'POST',
        //     body: req
        // })
        // const fetch = await fetch(monsterUrl)
        // .then((res) => {
        //     console.log(res, '<- And what does this look like?')
        //     if(res.ok) return res.json();
        //     return res.json().then(response => {
        //     console.log(response, '<- Proper Response in dndAPI utility')
        //     throw new Error(response.err)
        //     })
        // });
        // console.log(response, '<- Response from Fetch in DNDAPI Controller');
        //if (response.ok) {
            //const data = await response.json();
            // console.log(data, '<- This is the data in the API call')
            // res.status(200).json({ data: data });
            res.status(200).json({ response : response });
        //}
        // return response
    } catch (err) {
        console.log(err.message, '<- Error in DNDAPI Controller')
        res.status(400).json({ err });
    }
}