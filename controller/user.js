import {userModel} from '../model/user.model.js'

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
export const loginUser = (req, res)=>{

}