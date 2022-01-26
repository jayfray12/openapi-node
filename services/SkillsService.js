/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Fetch all the skills available to be added on a survey submission.
* Returns all skills that are active in the Skills table.
*
* filterBy String Field by which to filter (optional)
* filterString String String to filter on, query string (optional)
* sortBy String Field by which to sort (optional)
* sortOrder String Sort Order (optional)
* offset Integer Page offset (optional)
* maxResults Integer Maximum number of results to return, defaults to 20 (optional)
* returns List
* */
const getAllSkills = ({ filterBy, filterString, sortBy, sortOrder, offset, maxResults }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filterBy,
        filterString,
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

module.exports = {
  getAllSkills,
};
