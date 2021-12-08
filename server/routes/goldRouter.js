const express = require( 'express' );
const GoldRouter = express.Router();
const {GoldController} = require( '../controllers/ninjaGoldController' );

//!-----------Routes----------------------------------------------------------------

GoldRouter.route('/firsttime').get(GoldController.CreateCount);

GoldRouter.route('/farm').get(GoldController.farm);

GoldRouter.route('/cave').get(GoldController.cave);

GoldRouter.route('/casino').get(GoldController.casino);

GoldRouter.route('/house').get(GoldController.house);

GoldRouter.route('/reset').get(GoldController.reset);

//!-----------Routes----------------------------------------------------------------


module.exports = { GoldRouter };