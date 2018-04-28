const jwt = require('jsonwebtoken');
const db = require('../../models');
const config = require('../../config');


module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).end();
    }

    const token = req.headers.authorization.split(' ')[1];

    return jwt.verify(token, config.jwtSecret, (err,decoded) => {

        if (err) { return res.status(401).end(); }

        const userId = decoded.sub;
    })
}