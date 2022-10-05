const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { userValidation } = require("../validators");
const { body, param, validationResult } = require('express-validator');

router.route("/").get(userController.getPraktikan);

router.route("/:nama").get(userValidation.getPraktikanByName, userController.getPraktikanByName);
router.route("/:email/:telp").get(userValidation.getPraktikanByEmailTelp, userController.getPraktikanByEmailTelp);
router.route("/delete/:email").delete(userValidation.deletePraktikan, userController.deletePraktikan);
router.route("/update/:deskripsi/:nama").patch(userValidation.updatePraktikan, userController.updatePraktikan);
router.route("/insert").post(userValidation.insertPraktikan, userController.insertPraktikan);


module.exports = router;