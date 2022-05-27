const express = require("express");

const PoliticianController = require("../../controllers/politician.controller.js");

//route - /api/v1/politician
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", PoliticianController.findAll);
router.get("/:id", PoliticianController.findOne);
router.post("/", PoliticianController.create);
router.patch("/:id", PoliticianController.update);
router.delete("/:id", PoliticianController.politicianDelete);

module.exports = router;
