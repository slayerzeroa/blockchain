const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds=12;
const jwt = require('jsonwebtoken');
const { createVerify } = require('crypto');

const infoSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    code: {
        type: String,
        trim: true, //스페이스를 없애주는 역할
        unique: 1,
    },
    major: {
        type: String,
    },
    score: {
        type: String,
    },
    certi: {
        type: String,
    },
    multimajor: {
        type: String,
    },
    club: {
        type: String,
    },
    club: {
        type: String,
    },
    clubinfo:{
        type: String
    },
    tokenExp: {
        type: Number,
    },

})

infoSchema.methods.generateToken=function(cb){
    var info = this;
    // jsonwebtoken을 이용해서 token을 생성
    var token = jwt.sign(info._id.toHexString(), 'secretToken');
    //user._id+'secretToken'= token
    info.token= token;
    info.save(function(err,info){
        if(err)return cb(err);
        cb(null, info)
    });
}

infoSchema.statics.findByToken = function (token, cb){
    var info = this;
    //user._id + "" = token;
    jwt.verify(token, 'secretToken',function(err, decoded){
        //유저 아이디를 통해 유저를 찾기
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
        info.findOne({"_id":decoded, "token":token},function(err, info){
            if (err) return cb(err);
            cb(null, info)
        })
    });
}

const Info = mongoose.model('Info',infoSchema)
module.exports={Info}