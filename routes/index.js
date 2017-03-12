const models = require('express').Router();
const analysis = require('./analysis');

models.get('/:inputText', analysis);

module.exports = models;
