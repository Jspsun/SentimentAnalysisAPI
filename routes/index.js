const routes = require('express').Router();

const analysis = require('./analysis');

routes.use('/analysis', analysis);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
