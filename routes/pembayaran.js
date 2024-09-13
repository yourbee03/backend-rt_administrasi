const express = require('express');
const router = express.Router();
const pembayaranController = require('../controllers/pembayaranController');

router.post('/', pembayaranController.createPembayaran);
router.get('/', pembayaranController.getPembayaran);
router.get('/report', pembayaranController.getReportPembayaran);
router.put('/:id', pembayaranController.updatePembayaran);
router.post('/', async (req, res) => {
    const { penghuni_id, rumah_id, bulan, iuran_kebersihan, iuran_satpam, status } = req.body;
    try {
      const pembayaran = await Pembayaran.create({
        penghuni_id, rumah_id, bulan, iuran_kebersihan, iuran_satpam, status
      });
  
      res.json(pembayaran);
    } catch (error) {
      res.status(500).json({ message: 'Error creating pembayaran' });
    }
  });
  

module.exports = router;
