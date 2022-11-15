const userController = require('../controller/userController')
const questioncontroller=require('../controller/questionController');
const router = require("express").Router()

router.post('/addUser', userController.addCandidate)
router.post('/addQuestions', questioncontroller.addQuestions)

router.get('/getAllQuestions', questioncontroller.getAllQuestions)

router.get('/:userUuid', questioncontroller.getQuestionByUserId)

router.put('/:uuid', questioncontroller.updateQuestionsById)

module.exports = router;