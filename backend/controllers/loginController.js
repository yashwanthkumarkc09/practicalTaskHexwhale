const LoginService = require('../services/loginService');
const loginKey = new LoginService();

class Login{

    async loginControllerCall(req,res){
        let data = await loginKey.userLogin(req.query);

        if(data !== `Invalid Credentials`)
        {
        if(data.userInfo.length>0) {
            if(data.userInfo[0].disable) res.status(201).json({message:'loginDenied'})
            else  return  res.status(201).json({message:data})
        }
    }

        else return res.status(201).json({message:'Invalid Credential'})
    }//loginControllerCall

    async registerData(req,res){
        let data = await loginKey.registerData(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }
    

    async updatePassword(req,res){
        let data = await loginKey.updatePassword(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

    async updateUserInfo(req,res){
        let data = await loginKey.updateUserInfo(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

}

module.exports = Login;