//*REQUIRES------------------------------------------------------------------------------------------
const express = require('express');
const {GoldRouter} = require('./server/routes/goldRouter');
const path = require('path');
var cors = require('cors')

//*APP------------------------------------------------------------------------------------------
const app = express();
app.use(cors())
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );
// app.use(express.static(path.join(__dirname, "/public/dist/public")))

//*DATABASE------------------------------------------------------------------------------------------
require("./server/config/database.js");

//*ROUTES------------------------------------------------------------------------------------------
app.use( '/gold', GoldRouter );

// app.all('*', function (req,res) {
//     res.sendFile(path.resolve("./public/dist/public/index.html"))
// })

//*PORT------------------------------------------------------------------------------------------
let port = 8080
app.listen(port, function(){
    console.log("This server is working on port: 8080");
})