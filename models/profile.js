const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const profileSchema =new Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture : {
        type: String,
        required: true
    },
    bio : {
        type: String,
        required: true,
        minlength: 20
    },
    currentStatus: {
        type: String,
        required: true
    },
    contacts: {
        phone: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        fbLink: {
            type: String
        },
        linkedinLink: {
            type: String
        }
    },
    onlineJudgeLink : {
        githubLink: {
            type: String
        },
        stopstalkLink: {
            type: String
        },
        codeforcesLink:{
            type: String
        },
        leetcodeLink: {
            type: String
        }
    },
    onlineJudgeHandle : {
        codeforces: {
            type: String
        },
        vjudge: {
            type: String
        }
    }
});


const Profile = mongoose.model('Profile', profileSchema);

function validateProfile(profile)
{
     const schema = Joi.object({
        name: Joi.string().required().min(3),
        profilePicture : Joi.string().required(),
        bio : Joi.string().required().min(20),
        currentStatus: Joi.string().required(),
        contacts: Joi.object({
            phone: Joi.number().min(1000000000).max(1999999999).required(),
            email: Joi.string().email().required(),
            fbLink: Joi.string(),
            linkedinLink: Joi.string()
        }),
        onlineJudgeLink : Joi.object({
            githubLink: Joi.string(),
            stopstalkLink: Joi.string(),
            codeforcesLink:Joi.string(),
            leetcodeLink: Joi.string()
        }),
        onlineJudgeHandle: Joi.object({
            codeforces: Joi.string(),
            vjudge: Joi.string()
        })

     });

     return schema.validate(profile);
}

exports.Profile = Profile;
exports.validateProfile = validateProfile;