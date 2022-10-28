const userController = require('../controller/userController')
const router = require("express").Router()


router.post('/addUser', userController.addCandidate)

router.get('/getAllUsers', userController.getAllUsers)

router.get('/:uuid', userController.getOneUser)

router.put('/:uuid', userController.updateUser)

module.exports = router;