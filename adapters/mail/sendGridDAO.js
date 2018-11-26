const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

class sendGridDAO {
  async sendEmail (from, to, message) {
    const msg = {
      to: to,
      from: from,
      subject: 'Email from don.gg',
      text: message,
      html: `<div>${message}</div>`
    }
    return sgMail.send(msg)
  }
}

module.exports = sendGridDAO
