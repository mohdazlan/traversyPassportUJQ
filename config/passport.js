const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email,password,done) => {
// MATCH USE
User.findOne({email:email})
.then()
.catch(err => console.log(err))
    }),
  );
};
