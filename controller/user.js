import {userModel} from '../model/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res)=>{
    try{
        const {body: {name, email, password}} = req;
        console.log(email);
        const existingUser = await userModel.findOne({email:email});
        console.log(existingUser);
        if(existingUser) return res.status(409).send({msg: "Email already exists, Try logging in"})
        const newUser = new userModel({name: name, email: email, password: password});
        await newUser.save();
        return res.status(201).send({msg: "Account created"});
    }catch(err){
        res.sendStatus(500);
    }
}
export const loginUser = async (req, res)=>{
    try{
        const {body: {email, password}} = req;
        const findUser = await userModel.findOne({email});
        if(!findUser) return res.status(404).send({msg: "User Not Found, Try Signup"});
        if(!(await bcrypt.compare(password, findUser.password))) return res.status(401).send({msg: "password doesnot match"});
        const token = jwt.sign({id: findUser._id}, process.env.JWT_SECRET_USER, {expiresIn: '1h'});
        res.cookie('token', token, {
            maxAge: 1000*60*60*1,
            httpOnly: true
        })
        return res.status(200).send({msg: "Logged in"});
    }catch(err){
        res.sendStatus(500);
    }
}