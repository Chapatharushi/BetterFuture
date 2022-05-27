const express = require("express");

const PartyController = require("../../controllers/party.controller.js");

//route - /api/v1/party
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", PartyController.findAllParty);
router.get("/:id", PartyController.findOneParty);
router.post("/", PartyController.createParty);
router.patch("/:id", PartyController.updateParty);
router.delete("/:id", PartyController.partyDelete);

module.exports = router;