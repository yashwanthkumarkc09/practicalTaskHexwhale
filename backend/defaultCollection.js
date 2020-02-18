module.exports = function (app) {
    const db = require('./dbDeclaration').url;
    function createDefaultCollections() {

        db.loginData.find(function (err, count) {
            if (count.length == 0) {
                console.log("zero")
                var obj = [

                    {

                        "name" : "Admin",
                        "email" : "admin@gmail.com",
                        "password" : "$2b$08$8vuZ.ND.dPeJwa8UP2xqnuXhSHOiLYxqtSgkbmIpawAACyGAt6yUG",
                        "city" : "Bangalore",
                        "mobile" : "9999999999",
                        "role" : "Admin",
                        "disable" : false,
                        "date" : "2020-02-18T10:55:37.784Z"

                    },

                    {
                        "name" : "User",
                        "email" : "user@gmail.com",
                        "password" : "$2b$08$VLfjBJKw9L4ZlxU.asZio.7Z6ou50G7LmZ1C1tEyqx8Ya7LtNmoNi",
                        "city" : "Bangalore",
                        "mobile" : "7878787878",
                        "role" : "user",
                        "disable" : false,
                        "date" : "2020-02-18T14:29:33.586Z"
                    }
                ]
                for (var i = 0; i < obj.length; i++) {
                    db.loginData.insert(obj[i])
                }
            } 
        })//loginDataEnd

        db.category.find(function (err, count) {
            if (count.length == 0) {
                var obj = (

                    {  
                    "categoryName" : "Fruits",
                    "categoryType" : "CategoryOne",
                    "subCategory" : [ 
                    {
                    "label" : "Apple"
                    }
                    ]
                 }
                )

                db.category.insert(obj)
            } 

        })



    }
    createDefaultCollections()


}