const express = require('express');
const router = express.Router;
const {User,insertUser}= require('../models/user.model');

module.exports.register = async(req,res) =>{
    let {name,email,password} = req.body; 
    console.log(req.body)
    try {
        await insertUser(name, email, password)
	  	res.json({
	  		result: 'ok',
              message: 'Register succesfull !!!'
	  	})		
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Register failed . Lỗi : ${error}`
        })
	}
}
const activateUser = async (email, secretKey) => {
    try {
        let foundUser = await User.findOne({email, password: secretKey})
                                .exec()
        if (!foundUser) {
            throw "Không tìm thấy User để kích hoạt"
        }    
        if (foundUser.active === 0) {
            foundUser.active = 1
            await foundUser.save()            
        } else {
            throw "User đã kích hoạt" //foundUser.active = 1
        }
    } catch(error) {        
        throw error       
    }
}
//Viết hàm login user
module.exports.login = async (email, password) => {
    try {
        let foundUser = await User.findOne({email: email.trim()})
                            .exec()
        if(!foundUser) {
            throw "User không tồn tại"
        }
        if(foundUser.active === 0) {
            throw "User chưa kích hoạt, bạn phải mở mail kích hoạt trước"               
        }
        let encryptedPassword = foundUser.password
        let checkPassword = await bcrypt.compare(password, encryptedPassword)
        if (checkPassword === true) {
            //Đăng nhập thành công
            let jsonObject = {
                id: foundUser._id
            }
            let tokenKey = await jwt.sign(jsonObject, 
                                secretString, {
                                    expiresIn: 86400 // Expire trong 24 giờ
                                })
            return tokenKey
        }
    } catch(error) {
        throw error
    }
}
module.exports.verifyJWT = async (tokenKey) => {
    try {          
        let decodedJson = await jwt.verify(tokenKey, secretString)
        if(Date.now() / 1000 >  decodedJson.exp) {
            throw "Token hết hạn, mời bạn login lại"
        }
        let foundUser = await User.findById(decodedJson.id)
        if (!foundUser) {
            throw "Ko tìm thấy user với token này"
        }
    } catch(error) {
        throw error
    }                 
}

