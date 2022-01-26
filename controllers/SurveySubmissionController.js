/**
 * The SurveySubmissionController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SurveySubmissionService');
const createSurveySubmissions = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSurveySubmissions);
};

const disableSurveySubmission = async (request, response) => {
  await Controller.handleRequest(request, response, service.disableSurveySubmission);
};

const getReviewedByByEmployeeId = async (request, response) => {
  await Controller.handleRequest(request, response, service.getReviewedByByEmployeeId);
};

const getReviewedOnByEmployeeId = async (request, response) => {
  await Controller.handleRequest(request, response, service.getReviewedOnByEmployeeId);
};

const getSurveySubmissionById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSurveySubmissionById);
};

const getSurveySubmissionsBySurveyGroupId = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSurveySubmissionsBySurveyGroupId);
};

const updateSurveySubmissionByID = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateSurveySubmissionByID);
};


module.exports = {
  createSurveySubmissions,
  disableSurveySubmission,
  getReviewedByByEmployeeId,
  getReviewedOnByEmployeeId,
  getSurveySubmissionById,
  getSurveySubmissionsBySurveyGroupId,
  updateSurveySubmissionByID,
};
