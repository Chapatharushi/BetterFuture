const PolicyService = require("../services/policy.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

// Create and Save a new policy
const createPolicy = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { title, subject, challenge, suggestion, rating } = req.body;

    const result = await PolicyService.createPolicies({
      title,
      subject,
      challenge,
      suggestion,
      rating
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Find all
const findAllPolicy = async function (req, res) {
  try {
    var policies = await PolicyService.getPolicies();
    return res.status(200).json({
      status: 200,
      data: policies,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single policy info with an id
const findOnePolicy = async (req, res) => {
  try {
    const policy = await PolicyService.getPolicyById(req.params.id);
    res.status(200).json(policy);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a policy by the id in the request
const updatePolicy = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, subject, challenge, suggestion, rating } = req.body;

    const result = await PolicyService.updatePolicy({
      id,
      title,
      subject,
      challenge,
      suggestion,
      rating
    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Delete a policy with the specified id in the request
const policyDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PolicyService.deletePolicy(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  createPolicy,
  findOnePolicy,
  findAllPolicy,
  updatePolicy,
  policyDelete,
};