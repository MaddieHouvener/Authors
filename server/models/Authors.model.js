const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of author is required"],
        minlength: [3, "Authors name needs to be at least 3 characters long"]
    },
    completed: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

const Authors = mongoose.model("Authors", AuthorsSchema);


module.exports.Authors = Authors;