const express = require('express');
const router = express.Router();
const rumahController = require('../controllers/rumahController');

router.get('/', rumahController.getRumah);
router.get('/:id', rumahController.getRumahById);
router.post('/', rumahController.createRumah);
router.put('/:id', rumahController.updateRumah);
router.delete('/:id', rumahController.deleteRumah);
router.put('/:id/status', rumahController.updateRumahStatus);

module.exports = router;
