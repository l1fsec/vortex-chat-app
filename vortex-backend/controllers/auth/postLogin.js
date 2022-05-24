const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
   try {
       const { mail, password } = req.body;   //request body mail and password

       const user = await User.findOne({mail: mail.toLowerCase});

       if(user && (await bcrypt.compare(password, user.password))) { //password verification 
          
           const token = jwt.sign(
               {
                   userId: user._id,
                   mail,
               },
               process.env.TOKEN_KEY,
               {
                   expiresIn: "24",
               }
           );

           return res.status(200).json({ //OK
               userDetails: {
                   mail: user.mail,
                   token: token,
                   username: user.username,
               },
           })
       }
       return res.status(400).send('Invalid credentials. Please try again.');  //Bad Request
   } catch (err) {
       return res.status(500).send('Something is not working. Please try again.'); //Internal Server Error
   }
};


module.exports = postLogin