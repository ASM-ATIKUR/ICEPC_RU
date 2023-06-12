// Checking if user is a admin. Must be added after auth middleware.

module.exports = function (req, res, next){
    if(!req.user.isAdmin) return res.status(403).send('Access denied.');
    next();
}