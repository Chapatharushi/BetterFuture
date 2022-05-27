const httpStatus = require("http-status");
const mongoose = require("mongoose");
const PolicyModel = require("../models/policy.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createPolicies = async ({ title, subject, challenge, suggestion, rating }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const policy = new PolicyModel({
      title,
      subject,
      challenge,
      suggestion,
      rating
    });

    const createPolicies = await policy.save({ session });

    if (!createPolicies) {
      throw new APIError({
        message: "Error occured while creating a policy",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }

    await session.commitTransaction();

    return {
      message: "Policy creation done successfully",
      data: policy.id,
    };
  } catch (error) {
    logger.error("Error occured while creating a policy", error);
    if (session) {
      await session.abortTransaction();
    }
    throw new APIError(error);
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

const getPolicies = async function (data) {
  try {
    const allPolicies = await PolicyModel.find(data);
    return {
      message: "Listing all policies",
      data: allPolicies,
    };
  } catch (e) {
    // Log Errors
    throw Error("Error while getting policies");
  }
};

const getPolicyById = async (id) => {
  try {
    const foundPolicy = await PolicyModel.findById(id);
    console.log("Policies : ", foundPolicy);
    return {
      message: "Listing a single policy",
      data: foundPolicy,
    };
  } catch (error) {
    logger.error("Error occured while reading the policy", error);
    throw new APIError(error);
  }
};

const updatePolicy = async ({ id, title, subject, challenge, suggestion, rating }) => {
  try {
    const policy = await PolicyModel.findById(id);

    policy.overwrite({ title, subject, challenge, suggestion, rating });
    await policy.save();

    return {
      message: "Policy updated successfully",
      data: policy,
    };
  } catch (error) {
    logger.error("Error occured while updating the policy", error);
  }
};

const deletePolicy = async (id) => {
  try {
    const policy = await PolicyModel.deleteOne({ _id: id });
    console.log(policy);
    return {
      message: "Policy deleted successfully",
    };
  } catch (error) {
    logger.error("Error occured while deleting the policy", error);
  }
};

module.exports = {
  createPolicies,
  getPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy,
};
