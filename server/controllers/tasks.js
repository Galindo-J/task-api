
const mongoose = require('mongoose')
var Task = mongoose.model('Task');

module.exports = {
    all: function (req, res) {
        Task.find()
            .then(all_tasks => res.json(all_tasks))
            .catch(err => res.json(err))
    },

    one: function (req, res) {
        Task.findById({ _id: req.params.id })
            .then(this_task => res.json(this_task))
            .catch(err => res.json(err))
    },


    create: function (req, res) {
        const newTask = new Task();
        newTask.title = req.body.title;
        newTask.description = req.body.description;
        newTask.save()
            .then(newTask => res.json({message: "Success", task: newTask}))
            .catch(err => res.json(err))
    },


    update: function (req, res) {
        Task.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },


    delete: function (req, res) {
        Task.remove({_id: req.params.id})
            .then(removed_task => res.json(removed_task))
            .catch(err => res.json(err))
    }

};
