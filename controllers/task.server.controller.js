// Controller for managing API requests related to a Task

var tasks = [];

exports.setTargetId = function (req, res, next, id) {

    req.targetId = id;
    next();
};

exports.save = function (req, res) {
    // Save a new task or update ane xisting task

    // console.log("Create Task");
    // console.log(req.body);

    if (req.body.id) {
        // existing task to be updated
        var foundTask;
        for (var x = 0; x < tasks.length; x++) {
            if (tasks[x].id == req.body.id) foundTask = tasks[x];
        }
        if (foundTask) {
            // lazy approach to grab all fields without any validation
            foundTask = req.body;
        }
        res.json(tasks);
    } else {
        // new task to be added
        if (req.body.title) {
            var newId = tasks.length + 1;
            var taskBody = {id:newId, title:req.body.title, dueDate:req.body.dueDate, complete:false, createdAt:new Date()};
            tasks.push(taskBody);
            res.json(tasks);
        } else {
            console.log("Missing Task Title");
            res.status(400).send("Missing Task Title");
        }
    }


};

exports.list = function (req, res) {
// list all tasks

    console.log("List Tasks");
    res.json(tasks);

};

exports.delete = function (req, res) {
// remove a task

    console.log("Delete Task " + req.targetId);
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