const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const passportSetup = require("./config/passport");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const keys = require("./config/keys");
const cookieParser = require("cookie-parser");


const app = express();
const PORT= process.env.PORT || 8080;  //Step 1


//connect with mongo
const MONGOdb_URI = 'mongodb+srv://yiyinzhang:602390489stop@youtubedb.1pt6s.mongodb.net/<dbname>?retryWrites=true&w=majority';

//\mongodb+srv://yiyinzhang:602390489stop@youtubedb.1pt6s.mongodb.net/YoutubeDB?retryWrites=true&w=majority
//Step 2
//process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_youtube', {   
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// connect to mongodb
mongoose.connect(keys.MONGODB_URI, () => {
  console.log("connected to mongo db");
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})
app.use(
  cookieSession({
    name: "session",
    keys: [keys.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

// initalize passport
app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());
// newBlogPost.save((error) => {
//     if(error) {
//         console.log("Ooops, something happened")
//     } else {
//         console.log('Data has been saved')
//     }
// })
//.saved    


app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// set up routes
app.use("/auth", Routes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'));

app.use('/', routes);

//Step 3
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
