// Controller for managing API requests related to a Task

var tasks = [];

exports.setTargetId = function (req, res, next, id) {

    req.targetId = id;
    next();
};

exports.create = function (req, res) {
    // create a new task

    if (req.body.title) {
        var newId = tasks.length + 1;
        var taskBody = {id:newId, title:req.body.title};
        tasks.push(taskBody);
    }
};

exports.list = function (req, res, callback, errorcallback) {
// list all tasks

    res.json(tasks);

};

exports.delete = function (req, res) {
// remove a task

    if (req.targetId) {
        for (var x = 0; x < tasks.length; x++) {
            if (tasks[x].id == req.targetId) {
                // remove the matching task
                tasks.splice(x, 1);
            }
        }
        res.json(tasks);

    } else {
        res.status(404).send("Task is not available");
    }

};

// Future improvements for create and list actions
//
// Create action
//
// Todo: Migrate to postgresql with sequelize
// var Task = req.app.get('models').Task;  // Create a model
// var taskBody = req.body;
// taskBody.userId = req.user.id;
// Task
//     .build(taskBody)
//     .save()
//     .then(function (newRec) {
//         res.status(200).json(newRec);
//     }).catch(function (error) {
//     logger.debug("Save Error on Task: ");
//     logger.error(error);
//     res.status(401).send("Save Error");
// });
//
// List action
//
// Todo: Migrate to postgresql with sequelize
// var Task = req.app.get('models').Task;
// Task.findAll({where: {userId: req.user.id}})
//     .then(function (recs) {
//         res.status(200).json(recs);
//
//     }).catch(function (error) {
//     logger.debug("Task Listing Error: ");
//     res.status(401).send(error);
// });