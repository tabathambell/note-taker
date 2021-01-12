const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const uniqid = require('uniqid');
console.log(uniqid()); // -> 4n5pxq24kpiob12og9
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// lets css and javascript work on localhost
app.use(express.static('public'));

const { notes } = require('./db/db.json');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});