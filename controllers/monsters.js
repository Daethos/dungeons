const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Monster = require('../models/monster');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    index,
    delete: deleteMonster
    // update: editMonster
}

// async function editMonster(req, res) {
//     try {
//         console.log(req.body, '<- Ooooh Boy!')
//     } catch (err) {
//         console.log(err.message, '<- Error in editing the monster!')
//     }
// }

async function deleteMonster(req, res) {
    try {
        await Monster.findByIdAndDelete(req.params.id)
        res.status(201).json({});
    } catch (err) {
        console.log(err.message, '<- Error in delete Monster function')
        res.status(400).json({ err })
    }
}

async function create(req, res) {
    console.log(req.body, '<- Hopefully the Monster!', req.user)
        try {
            const monster = await Monster.create({
                user: req.user,
                index: req.body.index,
                key: req.body.name,
                name: req.body.name,
                size: req.body.size,
                type: req.body.type,
                alignment: req.body.alignment,
                armor_class: req.body.armor_class,
                hit_points: req.body.hit_points,
                hit_dice: req.body.hit_dice,
                hit_points_roll: req.body.hit_points_roll,
                speed: {
                    burrow: req.body.speed.burrow,
                    climb: req.body.speed.climb,
                    fly: req.body.speed.fly,
                    swim: req.body.speed.swim,
                    walk: req.body.speed.walk,
                },
                strength: req.body.strength,
                dexterity: req.body.dexterity,
                constitution: req.body.constitution,
                intelligence: req.body.intelligence,
                wisdom: req.body.wisdom,
                charisma: req.body.charisma,
                proficiencies: [...req.body.proficiencies],
                damage_vulnerabilities: 
                req.body.damage_vulnerabilities.length > 0
                ?
                [...req.body.damage_vulnerabilities]
                :
                'Nothing of Note'
                ,
                damage_resistances: 
                req.body.damage_resistances.length > 0
                ?
                [...req.body.damage_resistances]
                :
                'Nothing of Note'
                ,
                damage_immunities: 
                    req.body.damage_immunities.length > 0
                    ?
                    [...req.body.damage_immunities]
                    :
                    'Nothing of Note'
                    ,
                condition_immunities:
                    req.body.condition_immunities.length > 0
                    ?
                    [...req.body.condition_immunities]
                    :
                    {
                        name: 'Nothing of Note',
                        index: 'Nothing',
                        url: 'api/conditions/nothing'
                    }
                    ,
                senses: {
                    blindsight: req.body.senses.blindsight,
                    darkvision: req.body.senses.darkvision,
                    passive_perception: req.body.senses.passive_perception,
                    truesight: req.body.senses.truesight,
                    tremorsense: req.body.senses.tremorsense,
                },
                languages: req.body.languages,
                challenge_rating: req.body.challenge_rating,
                xp: req.body.xp,
                special_abilities: [...req.body.special_abilities],
                actions: [...req.body.actions],
                legendary_actions: [...req.body.legendary_actions]
            })
            res.status(201).json({ monster: monster });
        } catch (err) {
            res.status(400).json({ err });
        }
}

async function index(req, res) {
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information
        // when you fetch teh posts
        const monsters = await Monster.find({}).populate("user").exec();
        res.status(200).json({ data: monsters });
    } catch (err) {
        res.status(400).json({ err });
    }
}