const Joi = require('joi');
const mongoose = require('mongoose');


const aboutSchema = new mongoose.Schema({
    committee : new mongoose.Schema({
        president: {
            type: String,
            required: true
        },
        vicePresident1: {
            type: String,
            required: true
        },
        vicePresident2:{
            type: String,
            required: true
        },
        treasurer: {
            type: String,
            required: true
        }
    }),
    studentCommittee: new mongoose.Schema({
        generalSecretary: {
            type: String,
            required: true
        },
        assistantGeneralSecretary: {
            type: String,
            required: true
        },
        officeSecretary: {
            type: String,
            required: true
        },
        assistantOfficeSecretary: {
            type: String,
            required: true
        },
        financeSecretary: {
            type: String,
            required: true
        },
        assistantFinanceSecretary: {
            type: String,
            required: true
        },
        publicationSecretary: {
            type: String,
            required: true
        },
        assistantPublicationSecretary: {
            type: String,
            required: true
        },
        socialWelfareSecretary: {
            type: String,
            required: true
        },
        assistantSocialWelfareSecretary: {
            type: String,
            required: true
        }
        
        
    })
});


const About = mongoose.model('About', aboutSchema);

function validateAbout(about)
{
    const schema = Joi.object({
        committee: Joi.object({
            president: Joi.string().required(),
            vicePresident1: Joi.string().required(),
            vicePresident2:Joi.string().required(),
            treasurer: Joi.string().required()
        }),
        studentCommittee: Joi.object({
            generalSecretary: Joi.string().required(),
            assistantGeneralSecretary:Joi.string().required(),
            officeSecretary: Joi.string().required(),
            assistantOfficeSecretary: Joi.string().required(),
            financeSecretary: Joi.string().required(),
            assistantFinanceSecretary: Joi.string().required(),
            publicationSecretary: Joi.string().required(),
            assistantPublicationSecretary: Joi.string().required(),
            socialWelfareSecretary: Joi.string().required(),
            assistantSocialWelfareSecretary: Joi.string().required()
        })
        
    });

    return schema.validate(about);
}

exports.About = About;
exports.validateAbout = validateAbout;