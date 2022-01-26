/**
 * The SurveyGroupController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SurveyGroupService');
const addDefaultSkill = async (request, response) => {
  await Controller.handleRequest(request, response, service.addDefaultSkill);
};

const assignEmployeeToSurveyGroup = async (request, response) => {
  await Controller.handleRequest(request, response, service.assignEmployeeToSurveyGroup);
};

const createSurveyGroup = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSurveyGroup);
};

const deleteDefaultSkill = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteDefaultSkill);
};

const deleteSurveyGroupByID = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSurveyGroupByID);
};

const getAllSurveyGroups = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllSurveyGroups);
};

const getEmployeesBySurveyGroup = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEmployeesBySurveyGroup);
};

const getSurveyGroupById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSurveyGroupById);
};

const getSurveyGroupSubmissions = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSurveyGroupSubmissions);
};

const removeEmployeeAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.removeEmployeeAssignment);
};

const updateDefaultSkills = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateDefaultSkills);
};

const updateEmployeeAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateEmployeeAssignment);
};

const updateSurveyGroupByID = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSurveyGroupByID);
};


module.exports = {
  addDefaultSkill,
  assignEmployeeToSurveyGroup,
  createSurveyGroup,
  deleteDefaultSkill,
  deleteSurveyGroupByID,
  getAllSurveyGroups,
  getEmployeesBySurveyGroup,
  getSurveyGroupById,
  getSurveyGroupSubmissions,
  removeEmployeeAssignment,
  updateDefaultSkills,
  updateEmployeeAssignment,
  updateSurveyGroupByID,
};
