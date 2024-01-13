//  creating routes for route's end listenners for  http://localhost:3001/ and http://localhost:3001/api
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
