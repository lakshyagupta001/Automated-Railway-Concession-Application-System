var bodyParser = require('body-parser')
var jwt=require('jsonwebtoken')




const authenticateUser = async (req, res, next) => {
    try {
      const token = req.cookies.token;
  console.log(token)
      if (!token) {
       
        throw new Error('No token found');
      }
      
      const decodedToken = jwt.verify(token, process.env.secret_key);
      
      req.userData = { userId: decodedToken.userId };
      next();
    } catch (error) {
      res.status(401).json({ error: 'Authentication failed' });
    }
  };
  

const sendTokenAsCookie = (res, token) => {
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 3600000, 
    });
  };


module.exports={authenticateUser,sendTokenAsCookie}