const db = require('../dbDeclaration').url;
const mongojs = require('mongojs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mailStartTemplate = `<h1>HexWhale Registration Confirmation</h1>`
const mailBodyTemplate = `<h4>Hi, Thanks For Registering<h4>`
const mailEndTemplate = `<h5>Thank You</h5><br>`
class LoginService {

    userLogin(userCredential) {
        return new Promise((reslove, reject) => {
            db.loginData.find({ email: userCredential.userEmail }, async (err, doc) => {
                if (err) reject(err)
                let data = await generateToken(doc[0].password, userCredential.userPassword)
                if (data !== `Invalid Credentials`)
                    return reslove({ 'token': data, 'userInfo': doc });
                else
                    return reslove(data)
            });

        })

    }//userRegisterationCall

    async registerData(requestData) {
        requestData.password = await hashPassword(requestData.password);
        return new Promise((reslove, reject) => {
            db.loginData.insert(requestData, async (err, doc) => {
                if (err) reject(err);
                gmailFun(requestData.email)
                return reslove(doc);
            })
        })

    }

    updatePassword(info) {
        return new Promise((reslove, reject) => {
            db.loginData.find({ email: info.userEmail }, async (err, doc) => {
                if (doc.length !== 0) {
                    db.loginData.update({ email: info.userEmail },
                        {
                            "$set": {
                                "password": await hashPassword(info.newPassword),
                            }
                        }, (err, doc) => {
                            if (err) reject(err)
                            reslove(doc)
                        })
                }
                else reslove(`unAuthorized`)

            })
        })
    }

    updateUserInfo(data) {
        return new Promise((reslove, reject) => {
            db.loginData.update({ "_id": mongojs.ObjectId(data._id) },
                {
                    "$set": {
                        "name": data.name,
                        "city": data.city,
                        "mobile": data.mobile
                    }
                }, (err, doc) => {
                    if (err) reject(err)
                    db.loginData.find({ email: data.email }, (err, reslut) => {
                        if (err) reject(err)
                        reslove(reslut);
                    })
                })
        })

    }

    getCategory() {
        return new Promise((reslove, reject) => {
            db.category.find((err, doc) => {
                if (err) reject(err);
                return reslove(doc)
            })
        })
    }


    getRegisteredUser() {
        return new Promise((reslove, reject) => {
            db.loginData.find({ "role": { $ne: "Admin" } }, (err, doc) => {
                if (err) reject(err);
                return reslove(doc)
            })
        })
    }

    deleteCategory(data) {
        return new Promise((reslove, reject) => {
            console.log(data._id)
            db.category.remove({ "_id": mongojs.ObjectId(data._id) }, (err, doc) => {
                if (err) reject(err)
                return reslove(doc)
            })
        })


    }


    addCategory(acceptData) {
        return new Promise((reslove, reject) => {
            db.category.insert(acceptData, (err, doc) => {
                if (err) reject(err);
                return reslove(doc);

            })
        })
    }
    disableUserLogin(updateData) {
        return new Promise((reslove, reject) => {
            db.loginData.update({ name: updateData.name },
                {
                    "$set": {
                        "disable": updateData.disable,
                    }
                }, (err, doc) => {
                    if (err) reject(err)
                    reslove(doc)
                })
        })
    }

    editCall(searchData) {
        return new Promise((reslove, reject) => {
            db.category.update({ "_id": mongojs.ObjectId(searchData._id) },
                {
                    "$set": {
                        "categoryName": searchData.categoryName,
                        "categoryType": searchData.categoryType,
                        "subCategory": searchData.subCategory
                    }
                }, (err, doc) => {
                    if (err) reject(err)
                    reslove(doc)
                })
        })
    }

}//Class Clouser

function hashPassword(password) {
    return new Promise((reslove, reject) => {
        reslove(bcrypt.hashSync(password, bcrypt.genSaltSync(8), null))
    })
}
function generateToken(encryptedPwd, password) {
    return new Promise((reslove, reject) => {
        hash = encryptedPwd;
        bcrypt.compare(password, hash, function (err, data) {
            if (err) { throw err }
            console.log(data)
            if (data) {
                let token = jwt.sign({ username: 'yash' }, 'secret', { expiresIn: '3h' });
                reslove({ 'token': token, 'message': 'Valid User' });
            }
            else {
                reslove(`Invalid Credentials`);
            }
        });
    })
}


function gmailFun(toEmail) {
    return new Promise((reslove, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'shramesh585@gmail.com',
                pass: 'yashu@29'
            }
        });

        const mailOptions = {
            from: 'shramesh585@gmail.com',
            to: toEmail,
            subject: 'HexWhale:Thanks the Registration',
            html: `
      ${mailStartTemplate}
      ${mailBodyTemplate} 
      ${mailEndTemplate}`
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                reject(err)
            else
                reslove(info)
        });
    })
}


module.exports = LoginService;