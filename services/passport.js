const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/key')
const mongoose = require("mongoose");
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user)
  })
})

//NOTE: LOGIN WITH GOOGLE
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("profile", profile)

    //save data in database
    User.findOne({ googleId: profile.id }).then((existingUser)=>{
      if(existingUser){
        //done means everything is ok tanatan
        done(null,existingUser)
      }else{
        new User({
           googleId: profile.id,
           name:profile.displayName,
           email:profile._json.email,
           img:profile._json.picture
           }).save().then(
          ()=>{
            done(null,existingUser)
          }
        )
      }
    })
  }
  ));
  
//NOTE: LOGIN WITH FACEBOOK
passport.use(new FacebookStrategy({
  clientID: keys.FACEBOOK_APP_ID,
  clientSecret: keys.FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {

  console.log(profile)
// save data in database
  User.findOne({ googleId: profile.id }).then((existingUser)=>{
    if(existingUser){
      //done means everything is ok tanatan
      done(null,existingUser)
    }else{
      new User({
         googleId: profile.id,
         name:profile.displayName,
         email:profile._json.email,
         img:profile._json.picture
         }).save().then(
        ()=>{
          done(null,existingUser)
        }
      )
    }
  })


}
));

