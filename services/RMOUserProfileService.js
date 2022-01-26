/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Find a list ggregate Skill Ratings for each skill that the employee has be rated on 3 or more times.
* Return a Map<skill,rating> of all the the skills that the employee has been rated on 3 or more times.
*
* employeeId String Kerberos ID of the employee.
* returns List
* */
const getEmployeeAggregateSkillRatings = ({ employeeId }) => new Promise(
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
* Find a list of all the project and corresponding skills associated with an employee.
* Return a Map<project,skills> of all the projects an employee is part of and a list of skills that the employee used at each project.
*
* employeeId String Kerberos ID of the employee.
* returns List
* */
const getEmployeeSkillsHistory = ({ employeeId }) => new Promise(
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

module.exports = {
  getEmployeeAggregateSkillRatings,
  getEmployeeSkillsHistory,
};
