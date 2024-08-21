const router = require("express").Router();

const {loginUser,registerUser,getSingleUser,forgotPassword,resetPassword} = require('../controllers/usercontroller')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/getsingleuser').post(getSingleUser);
router.route('/forgotpassword').post(forgotPassword);
router.route('/password/reset/:ourtoken').post(resetPassword);

module.exports = router;
