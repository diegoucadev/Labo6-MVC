const express = require('express');
const userRoute = require('./src/routes/user.route');
const path = require('path');

const PORT = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

app.listen(PORT);