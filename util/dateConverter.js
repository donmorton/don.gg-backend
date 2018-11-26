const moment = require('moment')

const convertDate = (date) => {
  return moment(date).format('YYYY-MM-DD')
}

const convertQueryDate = (date) => {
  var convertedDate = new Date(date).toISOString('yyyy-MM-dd')
  return moment(convertedDate).format('YYYY-MM-DD')
}

module.exports = {
  convertDate,
  convertQueryDate
}
