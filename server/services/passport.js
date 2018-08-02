const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const Users = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true,
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('Start passport');
            Users.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    done(null, existingUser);
                    console.log('existingUser');
                } else {
                    new Users({ googleId: profile.id }).save().then((user) => done(null, user));
                    console.log('new Users');
                }
            });
        }
    )
);
