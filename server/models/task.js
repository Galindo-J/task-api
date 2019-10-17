   
   const mongoose = require('mongoose')
   
   const TaskSchema = new mongoose.Schema({
        title: { type: String, required: true, maxlength: 150 },
        description: { type: String, required: true, maxlength: 300 },
        completed: { type: Boolean, default: false }
    }, { timestamps: true });

    var Task = mongoose.model('Task', TaskSchema);