const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const mongoURI = require('./config/keys').mongoURI;


const videos = require('./routes/api/videos');
// const update = require('./routes/api/update');
const allvideos = require('./routes/getallvideos');
// const update = require('./routes/api/videos');
const find = require('./routes/api/videos');
// const showall = require('./routes/videos')


const app = express();

//Bodyparser Middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// DB Config
const db = mongoURI;

// Connect to Mongo  , {useNewUrlParser: true}
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Error: ' + err));

// Use Routes
app.use('/add', videos);
// app.use('/add', videos);
app.use('/update', videos);
// app.use('/api/find', find);
// app.use('/api/find/cluster', find);
app.use('/showall', videos);
// app.use('/title', videos);
// app.use('/cluster', allvideos);




// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build/'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));