var dateConverter = require('./dateConverter')

const getWhere = (userID, deliveryDate) => {
  // Prepare statements
  if (userID && deliveryDate) {
    return `WHERE user_id = ${userID} AND delivery_date = '${dateConverter.convertQueryDate(deliveryDate)}' `
  }

  return userID ? `WHERE user_id = ${userID}`
    : deliveryDate ? `WHERE delivery_date = ${dateConverter.convertQueryDate(deliveryDate)}`
      : ''
}

const getLimit = (page, per) => {
  var limit = parseInt(per) ? parseInt(per) : 4
  var pageNum = parseInt(page) ? parseInt(page) : 1
  var calcPage = (pageNum - 1) * limit

  return `LIMIT ${limit} OFFSET ${calcPage}`
}

module.exports = {
  getWhere,
  getLimit
}
