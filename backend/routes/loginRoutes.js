const express = require('express');
const router = express.Router();
const LoginDetails = require('../controllers/loginController');
const login = new LoginDetails();
const CommonBlock = require('../controllers/commonController');
const common = new CommonBlock();


router.get('/userLogin', login.loginControllerCall);

router.post('/registerData', login.registerData)

// router.post('/pilotRequest', common.pilotRequestHandel);

router.get('/getCategoryServiceCall', common.getCategory);

router.post('/deleteCategory', common.deleteCategory);

router.post('/addCategoryServiceCall', common.addCategory);

router.get('/getRegisteredUserServiceCall', common.getRegisteredUser);

router.put('/disableUserLogin', common.disableUserLoginPermission);

router.put('/editCall', common.editCall);

router.put('/updatePassword', login.updatePassword)

router.put('/updateUserInfo', login.updateUserInfo)

module.exports = router;