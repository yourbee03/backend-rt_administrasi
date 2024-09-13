const express = require('express');
const router = express.Router();
const pengeluaranController = require('../controllers/pengeluaranController');

router.post('/', pengeluaranController.createPengeluaran);
router.get('/', pengeluaranController.getPengeluaran);
router.get('/report', pengeluaranController.getReportPengeluaran);

module.exports = router;
