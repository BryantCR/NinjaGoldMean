const {GoldModel} = require( '../models/ninjaGoldModel' );


const GoldController = {


CreateCount: function (req,res) {
    GoldModel
    .getCount("am")
    .then(data=>{
        if (data === null){
            goldCount = {
                goldcount: 0,
                identifier: "am"
            }

            GoldModel.createCount(goldCount)
            .then(data=>{
                console.log(data);
                res.status(200).json(data)
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{

            res.status(200).json({msj: "Done"})
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(404).end()
    })
},
farm:function (req,res) {

        GoldModel.getCount("am")
        .then(data=>{
            if(data === null){
                res.statusMessage = "You can not edit an option that doesn't exists";
                res.status( 404 ).end();
            }
            else{

                let num = Math.random()*(5 - 2) + 2;
                let randomNumber = Number(num.toFixed())
                
                    gold = {}
                    goldValue = data.goldcount;
                    goldupdated = goldValue + randomNumber;
                    gold.goldcount = goldupdated //-----------------------

                    GoldModel.updategold(data.identifier,gold)
                    .then(data=>{
                        jsonInfo = {
                            goldupdated : randomNumber,
                            newvalue : data.goldcount
                        }
                        res.status(200).json(jsonInfo)
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        .catch(err =>{
            console.log(err);
        })
},
cave:function (req,res) {

    GoldModel.getCount("am")
    .then(data=>{
        if(data === null){
            res.statusMessage = "You can not edit an option that doesn't exists";
            res.status( 404 ).end();
        }
        else{

            let num = Math.random()*(10 - 5) + 5;
            let randomNumber = Number(num.toFixed())
            
                gold = {}
                goldValue = data.goldcount;
                goldupdated = goldValue + randomNumber;
                gold.goldcount = goldupdated //-----------------------

                GoldModel.updategold(data.identifier,gold)
                .then(data=>{
                    jsonInfo = {
                        goldupdated : randomNumber,
                        newvalue : data.goldcount
                    }
                    res.status(200).json(jsonInfo)
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        })
    .catch(err =>{
        console.log(err);
    })
},

casino:function (req,res) {

    GoldModel.getCount("am")
    .then(data=>{
        if(data === null){
            res.statusMessage = "You can not edit an option that doesn't exists";
            res.status( 404 ).end();
        }
        else{

            let num = Math.random()*(100 - (-100)) + (-100);
            let randomNumber = Number(num.toFixed())
            
                gold = {}
                goldValue = data.goldcount;
                goldupdated = goldValue + randomNumber;
                gold.goldcount = goldupdated //-----------------------

                GoldModel.updategold(data.identifier,gold)
                .then(data=>{
                    jsonInfo = {
                        goldupdated : randomNumber,
                        newvalue : data.goldcount
                    }
                    res.status(200).json(jsonInfo)
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        })
    .catch(err =>{
        console.log(err);
    })
},
house:function (req,res) {

    GoldModel.getCount("am")
    .then(data=>{
        if(data === null){
            res.statusMessage = "You can not edit an option that doesn't exists";
            res.status( 404 ).end();
        }
        else{

            let num = Math.random()*(15 - 7) + 7;
            let randomNumber = Number(num.toFixed())
            
                gold = {}
                goldValue = data.goldcount;
                goldupdated = goldValue + randomNumber;
                gold.goldcount = goldupdated //-----------------------

                GoldModel.updategold(data.identifier,gold)
                .then(data=>{
                    jsonInfo = {
                        goldupdated : randomNumber,
                        newvalue : data.goldcount
                    }
                    res.status(200).json(jsonInfo)
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        })
    .catch(err =>{
        console.log(err);
    })
},

reset:function (req,res) {

    GoldModel.getCount("am")
    .then(data=>{
        if(data === null){
            res.statusMessage = "You can not edit an option that doesn't exists";
            res.status( 404 ).end();
        }
        else{
                gold = {}
                goldupdated = 0;
                gold.goldcount = goldupdated //-----------------------

                GoldModel.updategold(data.identifier,gold)
                .then(data=>{
                    res.status(200).json(data)
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        })
    .catch(err =>{
        console.log(err);
    })
},




}//*End of Controller



module.exports = { GoldController };