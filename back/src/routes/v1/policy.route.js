const express = require("express");

const PolicyController = require("../../controllers/policy.controller.js");

//route - /api/v1/policy
const router = express.Router();

router.get("/health", (req, res) => res.status(200).send("UP"));

router.get("/", PolicyController.findAllPolicy);
router.get("/:id", PolicyController.findOnePolicy);
router.post("/", PolicyController.createPolicy);
router.patch("/:id", PolicyController.updatePolicy);
router.delete("/:id", PolicyController.policyDelete);

module.exports = router;
