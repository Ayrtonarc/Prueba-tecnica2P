const  { Schema, model} = require('mongoose')

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            //expresion regular
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'ingrese correo valido'
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

module.exports = model("User", UserSchema);