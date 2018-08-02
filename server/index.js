const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURL);

require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);