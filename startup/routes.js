const express = require('express');
const upload = require('express-fileupload');


// requiring the routes files
const notices = require('../routes/notices');
const users = require('../routes/users');
const auth = require('../routes/auth');
const contests = require('../routes/contests');
const profiles = require('../routes/profiles');
const mod = require('../routes/mod');
const programmers = require('../routes/programmers');
const about = require('../routes/about');
const photos = require('../routes/photos');
const homeData = require('../routes/homeData');
const vjudge = require('../routes/vjudge');
const resources = require('../routes/resources');




module.exports = function(app)
{
    // Adding all api endpoint
    app.use(express.json());
    app.use(upload());
    app.use('/api', express.static('public'));

    app.use('/api/notices', notices);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/api/contests', contests);
    app.use('/api/profiles', profiles);
    app.use('/api/programmers', programmers);
    app.use('/api/about', about);
    app.use('/api/gallery', photos);
    app.use('/api/homedata', homeData);

    app.use('/api/vjudge', vjudge);
    app.use('/api/resources', resources);
    app.use('/api/mod', mod);
    
}