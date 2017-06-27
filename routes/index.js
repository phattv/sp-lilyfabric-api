const dressesController = require('../controllers').dresses;

module.exports = (app) => {
  app.get('/api/dresses', (request, response) => response.status(200).send({
    message: 'Welcome to the Dresses API!',
  }));

  app.post('/api/dresses', dressesController.create);
};