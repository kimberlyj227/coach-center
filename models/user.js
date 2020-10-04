const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining model for user collection
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    gymnastList: [
        {
            type: Schema.Types.ObjectId,
            ref: "Gymnast"
        }
    ],

    id: {
        type: String,
        unique: true,
        required: true
    },
    
    lessonPlans: {
      type: Object
    }


});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;