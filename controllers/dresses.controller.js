const Dresses = require('../models/dress');

module.exports = {
  create(request, response) {
    return Dresses
      .create({
        code: request.body.code,
        name: request.body.name,
        features: request.body.features,
        price: request.body.price,
        category: request.body.category
      })
      .then(dress => response.status(201).send(dress))
      .catch(error => response.status(400).send(error));
  }
};