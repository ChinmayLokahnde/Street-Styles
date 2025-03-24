const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');

const userSchema =  mongoose.Schema({
    name : {type : String , required : true},
    email: {type: String, required: true, unique: true},
    password : {type: String, required: true, unique: true},
},
  {timestamps : true}
);

userSchema.pre (`Save`, async function (next) {
    if(!this.isModified('password'))
        return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enterdpassword) {
    return await bcrypt.compare( enterdpassword, this.password);
    
};

module.exports = mongoose.model('user', userSchema);
