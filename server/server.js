
require('dotenv').config({ path: "./config.env" });


const express = require('express');
const cors = require('cors');

// mongodb connection
const conn = require('./db/connection');



const app = express();


// use middleware
app.use(cors());

app.use(express.json());


// using routes
app.use(require('./routes/route'));



const port = process.env.PORT || 5000;


conn.then(db => {
    if (!db) {
        return process.exit(1);
    }

    // listen to the http server only when we have valid connection to mongodb culster database
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    app.on('error', err => {
        console.log(`Failed To Connect with HTTP Server: ${err}`);
    });

})
// error in mongodb connection
.catch(error => {
    console.log(`Connection Failed...! ${error}`);
});


