//* REQUIRES
const mongoose = require('mongoose');


//*----------------CONSTRUCTOR-------------------------------------------------------------------------------------
const GoldSchema = new mongoose.Schema({

    goldcount :{
        type : Number,
        required : true,
    },
    identifier : {
        type: String,
        required : true
    }


});
//*----------------CONSTRUCTOR END----------------------------------------------------------------------------------

//*CONNECT COLLECTION
const Gold = mongoose.model( 'golds', GoldSchema );


//*----------------QUERYS------------------------------------------------------------------------------------------

//?----------------(QUERYS FOR USERS)----------------------------
const GoldModel = {

    createCount : function (count) {
        return Gold.create(count) 
    },
    getCount : function( identifier ){
        return Gold.findOne({ identifier });
    },
    updategold: function(identifier , goldupdated) {
        return Gold.findOneAndUpdate({identifier}, {$set : goldupdated}, {new:true})
    }

    //TODO INSERT MORE QUERYS

}

//*----------------QUERYS END--------------------------------------------------------------------------------------

//* EXPORT MODEL (QUERY OBJECTS)
module.exports = {GoldModel};