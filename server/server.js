const express = require('express');
const database = require("./config/Database");
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require("cookie-session");
const passportSetup = require("./config/Passport");
const passport = require("passport");
const authRoutes = require("./routes/Auth");
const keys = require("./config/Keys");



const app = express();
const PORT = process.env.PORT || 8080;  //Step 1

// use cookie-session to encrypt user.id
app.use(
    cookieSession({
        name: "session",
        keys: [keys.cookieKey],
        maxAge: 24 * 60 * 60 * 1000,
    })
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);

// log output
app.use(morgan('tiny'));

// auth router
app.use('/auth', authRoutes);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server is starting at ${PORT}`));
