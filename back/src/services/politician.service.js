const httpStatus = require("http-status");
const mongoose = require("mongoose");
const PoliticianModel = require("../models/politician.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createPoliticians = async ({ fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const politician = new PoliticianModel({
      fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating
    });

    const createPoliticians = await politician.save({ session });

    if (!createPoliticians) {
      throw new APIError({
        message: "Error occured while saving a politician",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }

    await session.commitTransaction();

    return {
      message: "Politician saved successfully",
      data: politician.id,
    };
  } catch (error) {
    logger.error("Error occured while saving data", error);
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

const getPoliticians = async function (data) {
  try {
    const allPoliticians = await PoliticianModel.find(data);
    return {
      message: "Listing all politicians",
      data: allPoliticians,
    };
  } catch (e) {
    // Log Errors
    throw Error("Error while getting politicians");
  }
};

const getPoliticianById = async (id) => {
  try {
    const foundData = await PoliticianModel.findById(id);
    console.log("Politicians : ", foundData);
    return {
      message: "Listing a single politician data",
      data: foundData,
    };
  } catch (error) {
    logger.error("Error occured while reading the data", error);
    throw new APIError(error);
  }
};

const updatePolitician = async ({ id, fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating }) => {
  try {
    const politician = await PoliticianModel.findById(id);

    politician.overwrite({ fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating });
    await politician.save();

    return {
      message: "Politician data updated successfully",
      data: politician,
    };
  } catch (error) {
    logger.error("Error occured while updating the data", error);
  }
};

const deletePolitician = async (id) => {
  try {
    const politician = await PoliticianModel.deleteOne({ _id: id });
    console.log(politician);
    return {
      message: "Politician deleted successfully",
    };
  } catch (error) {
    logger.error("Error occured while deleting the data", error);
  }
};

module.exports = {
  createPoliticians,
  getPoliticians,
  getPoliticianById,
  updatePolitician,
  deletePolitician,
};
