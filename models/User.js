const  { Schema, model} = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            //expresion regular
            'Provve un correo valido'
        ],
    },
    displayName: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

//exportar

module.exports("User", UserSchema);