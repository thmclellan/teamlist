// This routing file maps incoming HTTP requests to corresponding functions in the controller

// Load the module dependencies
var controller = require('../controllers/task.server.controller');

// Define the routes module methods
module.exports = function(app) {

    app.route('/api/task')
        .get(controller.list)
        .post(controller.save);
    app.route('/api/task/:targetId')
        .delete(controller.delete);

    app.param('targetId', controller.setTargetId);
};