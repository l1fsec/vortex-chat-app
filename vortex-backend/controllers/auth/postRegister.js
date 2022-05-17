const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
    try {
        const { username, mail, password, } = req.body;

        //check if user exists
        const userExists = await User.exists({ mail });

        if (userExists){
            return res.status(409).send("Email is already used.")
        }

        //encryption of password
        const encryptedPassword = await bcrypt.hash(password, 10);

        //create and save user
        const user = await User.create({
            username, 
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });

        //here goes jwt token
        const token = 'JWT TOKEN';

        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            }
        })

    } catch (err) {
        return res.status(500).send('There was an error! Please try again!')
    }
};


module.exports = postRegister