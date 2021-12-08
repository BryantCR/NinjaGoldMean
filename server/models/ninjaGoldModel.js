const mongoose = require('mongoose');

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
const NijaG = mongoose.model( 'ngold', GoldSchema );

const GoldModel = {

    createCount : function (count) {
        return NijaG.create(count) 
    },
    getGoldCount : function( identifier ){
        return NijaG.findOne({ identifier });
    },
    updategold: function(identifier , goldupdated) {
        return NijaG.findOneAndUpdate({identifier}, {$set : goldupdated}, {new:true})
    }

}

module.exports = {GoldModel};