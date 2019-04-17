const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {Schema} = mongoose
const UserSchema = new Schema({
    name: {type: String, default: 'unknown', unique: true},    
    email: {type: String, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    password: {type: String, required: true},    
    active: {type: Number, default: 0},
})

const User = mongoose.model('User', UserSchema)
const insertUser = async (name, email, password) => {
    try {
    	//Mã hoá password trước khi lưu vào DB
	    const encryptedPassword = await bcrypt.hash(password, 10)//saltRounds = 10
        const newUser = new User()
        newUser.name = name
        newUser.email = email
        newUser.password = encryptedPassword        
        await newUser.save()
    } catch(error) {
        if (error.code === 11000) {
        	throw "Tên hoặc email đã tồn tại"
        }
     }
}
module.exports = {User, insertUser}