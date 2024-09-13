const express = require('express');
const router = express.Router();
const penghuniController = require('../controllers/penghuniController');

router.post('/', penghuniController.createPenghuni);
router.put('/:id', penghuniController.updatePenghuni);
router.get('/', penghuniController.getPenghuni);

module.exports = router;
