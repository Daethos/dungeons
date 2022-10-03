const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        visibility: {
            type: String,
            enum : ["public", "private"],
            default: "public"
        },
        index: {type: String, required: true},
        key: {type: String, required: true},
        name: {type: String, required: true},
        size: {type: String, required: true},
        type: {type: String, required: true},
        alignment: String,
        armor_class: Number,
        hit_points: Number,
        hit_dice: {type: String, required: true},
        hit_points_roll: {type: String, required: true},
        speed: {
            burrow: {type: String},
            climb: {type: String},
            fly: {type: String},
            swim: {type: String},
            walk: {type: String}
        },
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
        proficiencies: {
            type: [],
            default: null
        },
        damage_vulnerabilities: {
            type: [],
            default: null
        },
        damage_resistances: {
            type: [],
            default: null
        },
        damage_immunities: {
            type: [],
            default: null
        },
        condition_immunities: {
            type: [],
            default: null
        },
        senses: {
            blindsight: {type: String},
            darkvision: {type: String},
            passive_perception: {type: String},
            truesight: {type: String},
            tremorsense: {type: String}
        },
        languages: [],
        challenge_rating: {type: Number, required: true},
        xp: Number,
        special_abilities: {
            type: [], 
            default: null
        },
        actions: [],
        legendary_actions: {
            type: [],
            default: null
        }
    },
    {
        timestamps: true
})

module.exports = mongoose.model('Monster', monsterSchema);