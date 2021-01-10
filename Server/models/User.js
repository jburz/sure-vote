const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//initialize mongoose schema
const Schema = mongoose.Schema;

//create mongoose Schema for user model
//there is no password field because passport-local-mongoose will salt and hash and store those fields in the database
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    address1: {
        type: String,
        trim: true,
        required: true
    },
    address2: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        trim: true,
        required: true
    },
    zipCode: {
        type: Number,
        trim: true,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    personId: {
        type: String
    },
    profilePic: {
        data: Buffer,
        contentType: String
    }
});

UserSchema.plugin(passportLocalMongoose);

//initialize user model
const User = mongoose.model("User", UserSchema);

module.exports = User;