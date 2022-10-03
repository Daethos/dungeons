const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Monster = require('../models/monster');
const bcrypt = require('bcrypt');

module.exports = {
    index,
}

async function index(req, res) {
    try {
        console.log(req.user._id, '<- Index Function in Community Controller')
        const monsters = await Monster.find({}).populate("user").exec();
        res.status(200).json({ data: monsters });
    } catch (err) {
        res.status(400).json({ err });
    }
}