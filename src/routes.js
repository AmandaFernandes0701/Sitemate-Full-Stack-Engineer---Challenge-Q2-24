const { Router } = require('express');
const IssueController = require('./controllers/IssueController');
const IssueValidator = require('./validators/IssueValidator');

const routes = Router();

routes.post('/issue', IssueValidator.create, IssueController.create);
routes.get('/issue/:id?', IssueController.read);
routes.delete('/issue/:id', IssueValidator.destroy, IssueController.destroy);
routes.put('/issue/:id', IssueValidator.update, IssueController.update);

module.exports = routes;
