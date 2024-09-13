const express = require('express');
const router = express.Router();
const rumahPenghuniController = require('../controllers/rumahPenghuniController');

router.get('/', rumahPenghuniController.getAllRumahPenghuni);
router.get('/:rumahId', rumahPenghuniController.getPenghuniByRumah);
router.post('/', rumahPenghuniController.addPenghuniToRumah);
router.put('/:id', rumahPenghuniController.updatePenghuniInRumah);
router.delete('/:id', rumahPenghuniController.deletePenghuniFromRumah);
router.get('/:rumahId/historical', rumahPenghuniController.getHistoricalPenghuni);
router.get('/:rumahId/current', rumahPenghuniController.getCurrentPenghuni);

module.exports = router;
