const sendGrid = require('sendGrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {}

module.exports = Mailer;
