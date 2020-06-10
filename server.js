const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const {mongoURI} = require('./config/key')
const {COOKIE_KEY} = require('./config/key')
const cookieSession = require('cookie-session')
require('./models/User')

const app = express();

app.use(express.json());
app.use(cookieSession({
  maxAge:30 * 24 * 60 * 60 * 1000,
  keys:[COOKIE_KEY],
}))
app.use(passport.initialize());
app.use(passport.session())

require('./services/passport')
require('./routes/routes')(app)

  mongoose
  .connect(mongoURI,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Mondodb Connected"))
  .catch(err => console.error(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port port 5000`));

//18736637795-d809emqnd0k615k07tgeul1jr2a26b0m.apps.googleusercontent.com
//fjU1IYmtbpiEHdRlvMFFsSq9