const express = require( 'express' );
const NinjaGoldRouter = express.Router();
const {GoldController} = require( '../controllers/ninjaGoldController' );

//!-----------Routes----------------------------------------------------------------

NinjaGoldRouter
    .get( '/firsttime', GoldController.CreateCount);

NinjaGoldRouter
    .get( '/farm', GoldController.farm);

NinjaGoldRouter
    .get( '/cave', GoldController.cave);

NinjaGoldRouter
    .get( '/casino', GoldController.casino);

NinjaGoldRouter
    .get( '/house', GoldController.house);

NinjaGoldRouter
    .get( '/reset', GoldController.reset);

//!-----------Routes----------------------------------------------------------------


module.exports = { NinjaGoldRouter };