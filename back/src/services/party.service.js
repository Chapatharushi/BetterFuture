const httpStatus = require("http-status");
const mongoose = require("mongoose");
const PartyModel = require("../models/party.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createParty = async ({ partyname, partyleader, partysecretary, noofmps }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const party = new PartyModel({
      partyname, 
      partyleader, 
      partysecretary, 
      noofmps,
    });

    const createParty = await party.save({ session });

    if (!createParty) {
      throw new APIError({
        message: "Error occured while creating a party",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }
    await session.commitTransaction();

    return {
      message: "Party creation successfull",
      data: party.id,
    };
  } catch (error) {
    logger.error("Error occured while creating a party", error);
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

const getParties = async function (data) {
  try {
    const allParties = await PartyModel.find(data);
    return {
      message: "Listing all parties",
      data: allParties,
    };
  } catch (e) {
    throw Error("Error while getting parties");
  }
};

const getPartyById = async (id) => {
  try {
    const foundParty = await PartyModel.findById(id);
    console.log("Parties : ", foundParty);
    return {
      message: "Listing a single party",
      data: foundParty,
    };
  } catch (error) {
    logger.error("Error occured while reading the party", error);
    throw new APIError(error);
  }
};

const updateParty = async ({ id, partyname, partyleader, partysecretary, noofmps }) => {
  try {
    const party = await PartyModel.findById(id);

    party.overwrite({ partyname, partyleader, partysecretary, noofmps });
    await party.save();

    return {
      message: "Party updated successfully",
      data: party,
    };
  } catch (error) {
    logger.error("Error occured while updating the party", error);
  }
};

const deleteParty = async (id) => {
  try {
    const party = await PartyModel.deleteOne({ _id: id });
    console.log(party);
    return {
      message: "Party deleted successfully",
    };
  } catch (error) {
    logger.error("Error occured while deleting the party", error);
  }
};

module.exports = {
  createParty,
  getParties,
  getPartyById,
  updateParty,
  deleteParty,
};
