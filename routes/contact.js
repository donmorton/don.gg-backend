const express = require('express')
const router = express.Router()
const {makeRequest, raiseError} = require('../util/request')

/**
 * Returns a list of the sucessfully ordered meals, quantity, and delivery date that have been ordered
 */
const postMailHandler = (sendGridDAO, ordersLogic) =>
  async (req, res) => {
    const {fromEmail, message} = req.body

    let response
    try {
      response = await sendGridDAO.sendEmail(fromEmail, 'mail.donaldm@gmail.com', message)
    } catch (error) {
      raiseError(res, error, 500, 'Cannot send email')
    }

    console.log(response)

    makeRequest(req, res, response, 200)
  }

module.exports = (sendGridDAO, ordersLogic) => {
  router.post('/', postMailHandler(sendGridDAO, ordersLogic))
  return router
}
