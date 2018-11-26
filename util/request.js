// Sends a payload back as a <code> error
const raiseError = (res, error, code, message) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(code)
  res.send(JSON.stringify({
    'status': code,
    'errors': [message],
    'response': {
      'error code': !error ? null : error.code,
      'error number': !error ? null : error.errno
    }
  }))
}

// Makes a http send request given a response
const makeRequest = (req, res, response, code) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(code)
  res.send(JSON.stringify({ 'status': code, 'error': null, 'response': response }))
}

module.exports = {
  makeRequest,
  raiseError
}
