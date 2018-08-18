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
        this.addRecipients();
        this.sgApi = sendgrid(keys.sendGridKey);
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
    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach((recipients) => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON(),
        });

        console.log('Request:\n', request);

        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;
