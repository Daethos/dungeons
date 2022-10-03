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
    index,
    target
}

async function target(req, res) {
    console.log(req.body, '<- The monster target?')
    const monster = req.params.id;
    try {
        const response = await fetch(monsterUrl + monster, options)
        .then((res) => {
            console.log(res, '<- And what does this look like?')
            if(res.ok) return res.json();
            return res.json().then(response => {
            console.log(response, '<- Proper Response in dndAPI utility')
            throw new Error(response.err)
            })
        });
            res.status(200).json({ response : response });
    } catch (err) {
        console.log(err.message, '<- Error in DNDAPI Controller')
        res.status(400).json({ err });
    }
}



async function index(req, res) {
    console.log('And did we make it to the index in the controller?')
    try {
        const response = await fetch(monsterUrl, options)
        .then((res) => {
            console.log(res, '<- And what does this look like?')
            if(res.ok) return res.json();
            return res.json().then(response => {
            console.log(response, '<- Proper Response in dndAPI utility')
            throw new Error(response.err)
            })
        });
            res.status(200).json({ response : response });
    } catch (err) {
        console.log(err.message, '<- Error in DNDAPI Controller')
        res.status(400).json({ err });
    }
}