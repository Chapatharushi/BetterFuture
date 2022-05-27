const PoliticianService = require("../services/politician.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

// Save a new politician
const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating } = req.body;

    const result = await PoliticianService.createPoliticians({
      fullname,
      dob,
      gender,
      email,
      officeAddress,
      homeAddress,
      officePhone,
      homePhone,
      school,
      maxQualifications,
      fb,
      utube,
      web,
      secretary,
      secPhone,
      secEmail,
      party,
      position,
      district,
      previousTerms,
      projectOngoing,
      rating
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Find all
const findAll = async function (req, res) {
  try {
    var politicians = await PoliticianService.getPoliticians();
    return res.status(200).json({
      status: 200,
      data: politicians,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single politician with an id
const findOne = async (req, res) => {
  try {
    const politician = await PoliticianService.getPoliticianById(req.params.id);
    res.status(200).json(politician);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a politician by the id in the request
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { fullname, dob, gender, email, officeAddress, homeAddress, officePhone, homePhone, school, maxQualifications, fb, utube, web, secretary, secPhone, secEmail, party, position, district, previousTerms, projectOngoing, rating } = req.body;

    const result = await PoliticianService.updatePolitician({
      id,
      fullname,
      dob,
      gender,
      email,
      officeAddress,
      homeAddress,
      officePhone,
      homePhone,
      school,
      maxQualifications,
      fb,
      utube,
      web,
      secretary,
      secPhone,
      secEmail,
      party,
      position,
      district,
      previousTerms,
      projectOngoing,
      rating
    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Delete a politician with the specified id in the request
const politicianDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PoliticianService.deletePolitician(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  update,
  politicianDelete,
};
