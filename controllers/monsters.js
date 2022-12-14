const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Monster = require('../models/monster');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    index,
    getOne,
    delete: deleteMonster,
    editMonster
}

async function editMonster(req, res) {
    console.log(req.body, '<- Ooooh Boy!')
    try {
        console.log(req.params.id, '<- ID in the editMonster Controller')
        const monster = await Monster.findByIdAndUpdate(req.params.id, {
            user: req.user,
            index: req.body.index,
            visibility: req.body.visibility,
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
        monster.save();
        
        res.status(201).json({ monster: monster });
    } catch (err) {
        console.log(err.message, '<- Error in editing the monster!')
    }
}

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
                proficiencies: 
                    req.body.proficiencies.length > 0
                    ?
                    [...req.body.proficiencies, {
                        value: 'Extra Proficiency Value', 
                        proficiency: {
                            name: 'Extra Proficiency Name'
                        }
                    },{
                        value: 'Second Extra Proficiency Value', 
                        proficiency: {
                            name: 'Second Extra Proficiency Name'
                        }
                    }]
                    :
                    [
                        {
                            value: 'Prof. Value One', 
                            proficiency: {
                                name: 'Prof. Type Name One'
                            }
                        },
                        {
                            value: 'Prof. Value Two', 
                            proficiency: {
                                name: 'Prof. Type Name Two'
                            }
                        },
                        {
                            value: 'Prof. Value Three', 
                            proficiency: {
                                name: 'Prof. Type Name Three'
                            }
                        }
                    ]
                    ,
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
                special_abilities: 
                req.body.special_abilities.length > 0
                ?
                [...req.body.special_abilities, {name: 'Extra Special Ability Name', desc: 'Extra Special Ability Desc: Use Your Imagination!'}, {name: 'Second Extra Special Ability Name', desc: 'Second Extra Special Ability Desc: Use Your Imagination!'}]
                :
                [
                    {name: 'Special Ability Name One', desc: 'Special Ability Desc One: Use Your Imagination!'},
                    {name: 'Special Ability Name Two', desc: 'Special Ability Desc Two: Use Your Imagination!'},
                    {name: 'Special Ability Name Three', desc: 'Special Ability Desc Three: Use Your Imagination!'},
                ]
                ,
                actions: 
                    req.body.actions.length > 0
                    ?
                    [...req.body.actions, {name: 'Extra Action', desc: 'Extra Action: +Hit, Reach, Dice, DC, Type'}, {name: 'Second Extra Action', desc: 'Second Extra Action: +Hit, Reach, Dice, DC, Type'}]
                    :
                    [
                        {name: 'Action Name One', desc: 'Action Desc One: +Hit, Reach, Dice, DC, Type'},
                        {name: 'Action Name Two', desc: 'Action Desc Two: +Hit, Reach, Dice, DC, Type'},
                        {name: 'Action Name Three', desc: 'Action Desc Three: +Hit, Reach, Dice, DC, Type'},
                    ]
                    ,
                legendary_actions: 
                    req.body.legendary_actions.length > 0
                    ?
                    [...req.body.legendary_actions, {name: 'Extra Legendary Action', desc: 'Extra Legendary Action: +Hit, Reach, Dice, DC, Type'}, {name: 'Second Extra Legendary Action', desc: 'Second Extra Legendary Action: +Hit, Reach, Dice, DC, Type'}]
                    :
                    [
                        {name: 'L-Action Name One', desc: 'L-Action Desc One: +Hit, +Dam, Reach, Dice, DC, Type'},
                        {name: 'L-Action Name Two', desc: 'L-Action Desc Two: +Hit, +Dam, Reach, Dice, DC, Type'},
                        {name: 'L-Action Name Three', desc: 'L-Action Desc Three: +Hit, +Dam, Reach, Dice, DC, Type'}
                    ]
            })
            res.status(201).json({ monster: monster });
        } catch (err) {
            res.status(400).json({ err });
        }
}

async function index(req, res) {
    try {
        console.log(req.user._id, '<- User ID in Monster Index Controller')
        const monsters = await Monster.find({ user: req.user._id }).populate("user").exec();
        res.status(200).json({ data: monsters });
    } catch (err) {
        res.status(400).json({ err });
    }
}

async function getOne(req, res) {
    try {
        const monster = await Monster.findById({ _id: req.params.id})
        res.status(200).json({ data: monster });
    } catch (err) {
        res.status(400).json({ err });
    }
}