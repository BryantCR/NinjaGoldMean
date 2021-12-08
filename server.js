const express = require('express');
const {NinjaGoldRouter} = require('./server/routes/ninjaGoldRouter');
const path = require('path');
var cors = require('cors')

const app = express();
app.use(cors())
app.use( express.urlencoded({extended:true}) );
app.use( express.json() );

require("./server/config/database.js");

app.use( '/ninjagold', NinjaGoldRouter );

app.listen(8080, function(){
    console.log("This server is working on port 8080");
})