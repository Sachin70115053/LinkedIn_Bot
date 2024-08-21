const router = require('express').Router()
const {createpost,getallpost}  =require('../controllers/postcontroller')
const {isAuth} = require('../Middleware/auth')

router.route('/createpost').post(isAuth,createpost)

router.route('/getallpost').get(isAuth,getallpost)

module.exports = router;