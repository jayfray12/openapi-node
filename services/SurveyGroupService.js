/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add a default skill to a survey group.
* When a default skill is added to a survey group all survey submissions created for the survey group will include the default skill. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* uUID List An array of skillIds contained in the request body.
* no response value expected for this operation
* */
const addDefaultSkill = ({ surveyGroupId, uUID }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        uUID,
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
* Assign an employee under their GUID to a survey group
* Assign an employee under their GUID to a survey group
*
* surveyGroupId UUID 
* employeeId String 
* employeeAssignment EmployeeAssignment 
* returns EmployeeAssignment
* */
const assignEmployeeToSurveyGroup = ({ surveyGroupId, employeeId, employeeAssignment }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        employeeId,
        employeeAssignment,
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
* Create a new survey group in the Feedback 360 Survey API.
* A survey group is the starting point for creating a Feedback 360 Survey. A survey group contains the project information, list of employees on the project that will receive the survey, and a list of technologies used on the project. 
*
* surveyGroup SurveyGroup A new survey group resource contained in the request body.
* returns SurveyGroup
* */
const createSurveyGroup = ({ surveyGroup }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroup,
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
* Delete default skills for a Survey Group.
* This operation will delete the given default skill from the survey group. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* defaultSkillId UUID ID of the Default Skill as a GUID.
* no response value expected for this operation
* */
const deleteDefaultSkill = ({ surveyGroupId, defaultSkillId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        defaultSkillId,
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
* Disable a survey group from Feedback 360 Survey API.
* This operation will delete an entire survey group and all child resources  associated with it. This operation is idempotent. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* no response value expected for this operation
* */
const deleteSurveyGroupByID = ({ surveyGroupId }) => new Promise(
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
* Get all survey groups from Feedback 360 Survey API.
* Get all survey groups in Feedback 360 Survey API. 
*
* returns List
* */
const getAllSurveyGroups = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
* Get list of assigned employees for a given survey group
* This request will return an array of Employee objects which are associated with a particular survey group.
*
* surveyGroupId UUID 
* returns List
* */
const getEmployeesBySurveyGroup = ({ surveyGroupId }) => new Promise(
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
* Find a survey group resource by ID
* Returns a single survey group matching the given ID.
*
* surveyGroupId UUID ID of the survey group as a GUID.
* returns SurveyGroup
* */
const getSurveyGroupById = ({ surveyGroupId }) => new Promise(
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
* Find all submissions associated to a survey group.
* A submission contains all the ratings for the skills for a colleague receiving feedback. This operation will return all submissions submitted for a survey group. An empty resource collection is a valid response and indicates no feedback has been submitted. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* returns List
* */
const getSurveyGroupSubmissions = ({ surveyGroupId }) => new Promise(
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
* Remove an employee association with a survey group
* Remove an employee association with a survey group
*
* surveyGroupId UUID 
* employeeId String 
* no response value expected for this operation
* */
const removeEmployeeAssignment = ({ surveyGroupId, employeeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
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
* Update the default skills for a survey group. 
* When a default skill is added to a survey group all survey submissions created for the survey group will include the default skill. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* uUID List  (optional)
* returns SurveyGroupEntity
* */
const updateDefaultSkills = ({ surveyGroupId, uUID }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        uUID,
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
* Allows for updating start/end date and perhaps role for an existing assignment
* Allows for updating start/end date and perhaps role f
*
* surveyGroupId UUID 
* employeeId String 
* employeeAssignment EmployeeAssignment 
* returns EmployeeAssignment
* */
const updateEmployeeAssignment = ({ surveyGroupId, employeeId, employeeAssignment }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        employeeId,
        employeeAssignment,
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
* Update a Survey Group in Feedback 360 Survey API. 
* This representation of the survey group contained in this request will replace  the survey group located at this URI. This operation is idempotent. 
*
* surveyGroupId UUID ID of the survey group as a GUID.
* surveyGroup SurveyGroup  (optional)
* returns SurveyGroup
* */
const updateSurveyGroupByID = ({ surveyGroupId, surveyGroup }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        surveyGroupId,
        surveyGroup,
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
