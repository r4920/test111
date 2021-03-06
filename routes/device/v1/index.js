/**
 * index.js
 * @description :: index route file of device platform.
 */

const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./MasterRoutes'));
router.use(require('./BlogRoutes'));
router.use(require('./userRoutes'));

module.exports = router;
