const express = require('express');
const app = require('../app');
const router = express.Router(); 

// import the controller file for fcuntions
const postController = require('../Controllers/ReportController');

// use 
router.get('/', postController.baseRoute);

router.get('/getArea', postController.getArea);
router.get('/getLine', postController.getLine);
router.get('/getOther', postController.getOther);




module.exports = router;