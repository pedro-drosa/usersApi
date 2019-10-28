const User = require('../models/user');
module.exports = {
    // create a new user
    // returns error if user already exists
    async store(req, res){
        try {
            const {name, email, password} = req.body;
            if (await User.findOne({email})) {
                return res.status(400).send({error:"user alread exists"});
            }
            const user = await User.create({name, email, password});
            return res.json(user);
        } catch (error) {
            return res.status(400).send({error:"registration failed"});
        }
    },
    // returns list all users
    async index(req, res){
        try {
            const users = await User.find()
            return res.json(users);
            
        } catch (error) {
            return res.status(400).send({message:"nothing to display"});
        }
    },
    // returns a specific user 
    async show(req, res){
        try {
            const {email} = req.query;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).send({message:"no item matches search"});
            }
            return res.json(user);
        } catch (error) {
            return res.status(400).send({message:"nothing to display"});
        }
    },
    // change an existing user
    async update(req, res){
        try {
            const {name, email, password} = req.body;
            const user = await User.findOneAndUpdate({name, email,password});
            return res.json(user);
        } catch (error) {
            return res.status(400).send({error: "error updating data"});
        }
    },
    // delete an existing user 
    async destroy(req, res){
        try {
            const {email} = req.body;
            if(await User.findOneAndDelete({email})){
                return res.json({message:"data has been deleted"})
            }
            return res.status(400).send({message:"user does not exist"});
            
        } catch (error) {
            return res.status(400).send({error: "error deleting data"});
        }
    }, 
}