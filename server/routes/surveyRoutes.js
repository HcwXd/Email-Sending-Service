const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');

const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');

module.exports = (app) => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(),
        });
        const mailer = new Mailer(survey, surveyTemplate(template));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.post('api/surveys/webhook', (req, res) => {
        const p = new Path('/api/surveys/:surveyId/:choice');

        const event = _.chain(req.body)
            .map(({ email, url }) => {
                const match = p.test(new URL(url).pathname);
                if (match) {
                    return { email, surveyId: match.surveyId, choice: match.choice };
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .value();
    });

    app.get('/api/survey/thanks', (req, res) => {
        res.send('Thanks');
    });
};
