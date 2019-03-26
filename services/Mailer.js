const sgMail = require("@sendgrid/mail");
const { SENDGRID_KEY } = require("../config/keys");

class Mailer {
  constructor({ subject, recipients }, content) {
    this.message = {
      to: recipients,
      from: "averquienteresponde@rocketcube.com.mx",
      subject: subject,
      html: content,
      trackingSettings: {
        clickTracking: { enable: true }
      }
    };
    sgMail.setApiKey(SENDGRID_KEY);
  }

  async send() {
    const response = await sgMail.sendMultiple(this.message);
    return response;
  }
}

module.exports = Mailer;
