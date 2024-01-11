const User = require('./model');
const Role = require('../role/model');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const fs = require('fs');
const HTTP_RESPONSE = require("../../../../utils/httpResponses");
require('dotenv').config();

exports.Register = async (data) => {
    try {
        const user = await User.findOne({
            $or: [
                {email: data.email},
                {userName: data.userName}
            ]
        });
        if (user) {
            return HTTP_RESPONSE.BAD_REQUEST('Email address exists in database');
        }
            else {
            const newUser = new User({
                ...data
            });
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(newUser.password, salt);
            newUser.password = hash;
            let result = await newUser.save();
            return HTTP_RESPONSE.CREATED("User registered successfully", result);
        }
    } catch (ex) {
        console.log(ex);
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.Login = async (data) => {
    try {
        const privateKEY  = fs.readFileSync('./private.key', 'utf8');
        const {email, password} = data;
        let user = await User.findOne({email});
        if (!user) {
            return HTTP_RESPONSE.NOT_FOUND("No account found for this email address");
        }
        const isMatch = await bcrypt.compare(password, user["password"]);
        if (isMatch) {
            const payload = {
                id: user._id,
                name: user.name,
                userName: user.userName
            };
            const token = await jwt.sign(payload, privateKEY, {expiresIn: 36000, algorithm:  "RS256"});
            return HTTP_RESPONSE.SUCCESS("User is logged in successfully",
                {success: true, token});
        } else {
           return HTTP_RESPONSE.BAD_REQUEST("Password is incorrect");
        }
    } catch (ex) {
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}
exports.ChangePassword = async (req) => {
    try {

        const {body, user} = req;
        const oldPassword = String(body.oldPassword);
        const password = String(body.newPassword);
        let userData = await User.findOne({_id:user._id});
        if (!userData) {
            return HTTP_RESPONSE.NOT_FOUND("No account found for this User");
        }
        const isMatch = await bcrypt.compare(oldPassword, userData["password"]);
        if (isMatch) {
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(password, salt);
            userData.password = hash;
            let result = await userData.save();

            return HTTP_RESPONSE.SUCCESS("Password Changed Successfully",result);
        }
        else{
            return HTTP_RESPONSE.BAD_REQUEST("Password is incorrect");
        }
    } catch (ex) {
        console.log(ex);
        return HTTP_RESPONSE.INTERNAL_SERVER_ERROR(ex.message);
    }
}

exports.sendEmail = (req, res, next) => {
    User.findOne({
        email: req.body.email,
    }).then((user) => {
        if (user === null) {
            res.status(403).send("email not in db");
        } else {
            const token = crypto.randomBytes(20).toString("hex");
            const emailText =
                "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
                `http://localhost:3000/api/v1/user/resetPassword/${token}\n\n` +
                "If you did not request this, please ignore this email and your password will remain unchanged.\n";

            User.updateOne(
                { email: req.body.email },
                {
                    resetPasswordToken: token,
                    resetPasswordExpires: Date.now() + 3600000,
                }
            ).then((Obj) => {
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    //secure: true,
                    auth: {
                        user: 'hamyshah3@gmail.com',
                        pass: '*******'
                    }
                })
                const mailOptions = {
                    to: req.body.email,
                    subject: 'Link To Reset Password',
                    text: emailText
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                        res.status(500).send(error.message());
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).send('Email has been sent');
                    }
                });
            });
        }
    });
};
exports.ResetPassword = async (req,res) =>{
    let user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gte: Date.now() },
    });
        if (user == null) {
            return HTTP_RESPONSE.FORBIDDEN("password reset link is invalid or has expired");
        } else {
            return HTTP_RESPONSE.SUCCESS("password reset link a-ok");
        }


}

