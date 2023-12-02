const express = require('express');
const router = express.Router();
const nodecontroller = require('../controllers/controller');


router.get('/node', nodecontroller.getAll);
router.post('/node', nodecontroller.create);
router.put('/node/:id', nodecontroller.update);

module.exports = router;
