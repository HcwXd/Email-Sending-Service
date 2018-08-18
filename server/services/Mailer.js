const sendGrid = require('sendGrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();

        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);
        this.addContent(this.body);
        this.addClickTracking();
    }

    formatAddresses(recipients) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSetting = new helper.TrackingSettings();
        const clickTraking = new helper.ClickTracking(true, true);

        trackingSetting.setClickTracking(clickTraking);
        this.addClickTracking(trackingSetting);
    }
}

module.exports = Mailer;
