const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        description: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'], // Restricts values to these 3
            default: 'pending',
        },
        dueDate: {
            type: Date,
        }
    },
    {
        timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
    }
);

module.exports = mongoose.model('Task', taskSchema);