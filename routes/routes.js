const passport = require("passport");

module.exports = app =>{

  //NOTE: GOOGLE AUTH ROUTE
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] })
    );
  
  app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
    res.redirect('http://localhost:3000/profile')
  });

  //NOTE: FACEBOOK AUTH ROUTE

  app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
  res.redirect('http://localhost:3000/profile')
});

//NOTE: OTHERS ROUTE
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000/')
  });
  
}