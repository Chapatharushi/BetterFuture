const express = require("express");

const politicianRoutes = require("./v1/politician.route");
const policyRoutes = require("./v1/policy.route");
const userRoutes = require("./v1/user.route");
const partyRoutes = require("./v1/party.route");

// base route - /api
const router = express.Router();

// Health check route
router.get("/v1/health", (req, res) => res.status(200).send("UP"));

// v1 politician routes
router.use("/v1/politician", politicianRoutes);
// v1 policy routes
router.use("/v1/policy", policyRoutes);
// v1 user routes
router.use("/v1/user", userRoutes);
// v1 party routes
router.use("/v1/party", partyRoutes);

module.exports = router;
