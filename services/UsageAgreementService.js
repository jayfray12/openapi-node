/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* The latest usage agreement
*
* returns UsageAgreement
* */
const getUsageAgreement = () => new Promise(
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

module.exports = {
  getUsageAgreement,
};
