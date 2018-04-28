const jwt = require('jsonwebtoken');
const db = require('../../models');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };


    return db.User.findOne({
        where: {
            email: userData.email
        }
    }, (err, user) => {
        if (err) { return done(err);}

        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }

        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            const payload = {
                sub: user.id
            };

            const token = jwt.sign(payload, config.jwtSecret);
            const data = {
                name: user.name,
                username: user.username
            };

            return done(null, token, data)
        })
    })
})