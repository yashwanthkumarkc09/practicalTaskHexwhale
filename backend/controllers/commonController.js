const LoginService = require('../services/loginService');
const loginKey = new LoginService();

class Common {

    // async pilotRequestHandel(req, res) {
    //     let data = await loginKey.risePilotRequest(req.body);
    //     if (data) return res.status(201).json({ message: data })
    //     else return res.json({ message: `Error` })
    // }//loginControllerCall

    async getCategory(req, res) {
        let data = await loginKey.getCategory();
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

    async deleteCategory(req, res) {
        let data = await loginKey.deleteCategory(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

    async addCategory(req, res) {
        console.log(req.body)
        let data = await loginKey.addCategory(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
        //loginControllerCall

    }

    async getRegisteredUser(req, res) {
        let data = await loginKey.getRegisteredUser();
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

    async disableUserLoginPermission(req, res) {
        let data = await loginKey.disableUserLogin(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

    async editCall(req, res) {
        let data = await loginKey.editCall(req.body);
        if (data) return res.status(201).json({ message: data })
        else return res.json({ message: `Error` })
    }

}

module.exports = Common;