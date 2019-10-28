module.exports = {
    // create a new user
    // returns error if user already exists
    async store(req, res){
        res.json({store: true});
    },
    // returns list all users
    async index(req, res){},
    // returns a specific user 
    async show(req, res){},
    // change an existing user
    async update(req, res){},
    // delete an existing user 
    async destroy(req, res){}, 
}