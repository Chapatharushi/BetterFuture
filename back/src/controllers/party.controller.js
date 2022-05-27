const PartyService = require("../services/party.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

// Create and Save a new parties
const createParty = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { partyname, partyleader, partysecretary, noofmps } = req.body;

    const result = await PartyService.createParty({
      partyname, 
      partyleader, 
      partysecretary, 
      noofmps,
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

const findAllParty = async function (req, res) {
  try {
    var parties = await PartyService.getParties();
    return res.status(200).json({
      status: 200,
      data: parties,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single party with an id
const findOneParty = async (req, res) => {
  try {
    const party = await PartyService.getPartyById(req.params.id);
    res.status(200).json(party);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a party by the id in the request
const updateParty = async (req, res) => {
  try {
    const id = req.params.id;
    const { partyname, partyleader, partysecretary, noofmps } = req.body;

    const result = await PartyService.updateParty({
      id,
      partyname, 
      partyleader, 
      partysecretary, 
      noofmps,

    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Delete a party with the specified id in the request
const partyDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PartyService.deleteParty(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  createParty,
  findOneParty,
  findAllParty,
  updateParty,
  partyDelete,
};
