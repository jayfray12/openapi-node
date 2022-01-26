/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* For the currently authenticated user, return the user profile information
*
* returns Employee
* */
const getUserProfile = () => new Promise(
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
* Update the user profile resource 
* The representation of the user profile contained in this request will replace the user profile. This operation is idempotent. 
*
* employee Employee  (optional)
* returns Employee
* */
const updateUserProfile = ({ employee }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
  getUserProfile,
  updateUserProfile,
};
