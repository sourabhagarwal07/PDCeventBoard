const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT= process.env.PORT || 8080;  //Step 1

const routes = require('./routes/api');

//connect with mongo
//const MONGOdb_URI = 'mongodb+srv://yiyinzhang:602390489stop@youtubedb.1pt6s.mongodb.net/<dbname>?retryWrites=true&w=majority';

//Step 2
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mern_youtube', {   
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!')
})

// newBlogPost.save((error) => {
//     if(error) {
//         console.log("Ooops, something happened")
//     } else {
//         console.log('Data has been saved')
//     }
// })
//.saved    
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'));

app.use('/', routes);

//Step 3
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
