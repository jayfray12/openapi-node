/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Find an Employee resource by ID
* Returns a single employee matching the given ID.
*
* employeeId String Kerberos ID of the employee.
* returns Employee
* */
const getEmployeeById = ({ employeeId }) => new Promise(
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
* List all employees available in the Feedback 360 Survey API.
* This operation fetches a full list of employees available in the Feedback 360 Survey API.  The filtering and sorting mechanism for fetching this list is yet To Be Determined.  The Employees in the Feedback 360 Survey API data store will be populated from outside resources such as LDAP or Rover. 
*
* filterBy String Field by which to filter results. (optional)
* filter String String to filter on, query string (optional)
* sortBy String Field by which to sort (optional)
* sortOrder String Sort Order (optional)
* offset Integer Page offset (optional)
* maxResults Integer Maximum number of results to return, defaults to 20 (optional)
* returns List
* */
const getEmployees = ({ filterBy, filter, sortBy, sortOrder, offset, maxResults }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filterBy,
        filter,
        sortBy,
        sortOrder,
        offset,
        maxResults,
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
* Find an all Survey Groups an employee is part of resource by ID
* Returns a List of Survey Groups matching the given employee ID.
*
* employeeId String Employee's RedHat Kerberos ID.
* returns List
* */
const getSurveyGroupByEmployeeId = ({ employeeId }) => new Promise(
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
* Update an Employee resource by ID 
* The representation of the employee contained in this request will replace the employee located at this URI. This operation is idempotent. 
*
* employeeId String Kerberos ID of the employee.
* employee Employee  (optional)
* returns Employee
* */
const updateEmployeeByID = ({ employeeId, employee }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        employeeId,
        employee,
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
  getEmployeeById,
  getEmployees,
  getSurveyGroupByEmployeeId,
  updateEmployeeByID,
};
