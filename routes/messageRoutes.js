const express = require('express')
const { addMessage, getMessages, upload } = require('../controllers/messageControllers');

const router = express.Router();

router.post('/send-message', upload.single('image'), addMessage);
router.get('/get-message/:recieverId/:senderId', getMessages);

module.exports = router