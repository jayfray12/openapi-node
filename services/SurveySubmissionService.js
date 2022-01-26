/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a batch of SurveySubmissions for a survey group in the Feedback 360 Survey API.
* Returns a List of Employees in which surveys where created.
*
* surveyGroupId UUID ID of the survey group as a GUID.
* returns List
* */
const createSurveySubmissions = ({ surveyGroupId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Disable a surveySubmission from Feedback 360 Survey API.
* This operation will disable a survey submission and all child resources  associated with it. This operation is idempotent. 
*
* surveySubmissionId UUID ID of the survey submission as a GUID.
* no response value expected for this operation
* */
const disableSurveySubmission = ({ surveySubmissionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveySubmissionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Fetch the survey submissions reviewed by the given employee Id.
* Returns all survey submissions that have been reviewed by the employee ID.
*
* employeeId String Employee's RedHat Kerberos ID.
* returns List
* */
const getReviewedByByEmployeeId = ({ employeeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        employeeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Fetch the survey submissions that the given employee Id was reviewed on.
* Returns all survey submissions that the employee has been reviewed on.
*
* employeeId String Employee's RedHat Kerberos ID.
* returns List
* */
const getReviewedOnByEmployeeId = ({ employeeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        employeeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Fetch the survey submission associated with the survey submission resource ID
* Returns a survey submission matching the submission ID.
*
* surveySubmissionId UUID ID of the surveyGroup as a GUID.
* returns SurveySubmissionWithSkillRating
* */
const getSurveySubmissionById = ({ surveySubmissionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveySubmissionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Fetch the survey submissions associated with the Survey Group.
* Returns all survey submissions that are part of the SurveyGroup.
*
* surveyGroupId UUID ID of the surveyGroup as a GUID.
* returns List
* */
const getSurveySubmissionsBySurveyGroupId = ({ surveyGroupId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a survey Submission in Feedback 360 Survey API. 
* This representation of the survey submission contained in this request will replace  the survey submission located at this URI. This operation is idempotent. TODO 
*
* surveySubmissionId UUID ID of the employee assignment as a GUID.
* surveySubmissionWithSkillRating SurveySubmissionWithSkillRating  (optional)
* returns SurveySubmissionEntity
* */
const updateSurveySubmissionByID = ({ surveySubmissionId, surveySubmissionWithSkillRating }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveySubmissionId,
        surveySubmissionWithSkillRating,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createSurveySubmissions,
  disableSurveySubmission,
  getReviewedByByEmployeeId,
  getReviewedOnByEmployeeId,
  getSurveySubmissionById,
  getSurveySubmissionsBySurveyGroupId,
  updateSurveySubmissionByID,
};
