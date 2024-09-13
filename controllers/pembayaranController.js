const { Pembayaran, Penghuni, Rumah } = require('../models');

exports.createPembayaran = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.create(req.body);
    res.status(201).json(pembayaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePembayaran = async (req, res) => {
  const { id } = req.params;
  console.log(`Updating pembayaran with ID: ${id}`);
  try {
    const pembayaran = await Pembayaran.findByPk(id);

    if (!pembayaran) {
      return res.status(404).json({ message: 'Pembayaran not found' });
    }

    await pembayaran.update(req.body);
    res.status(200).json(pembayaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPembayaran = async (req, res) => {
  try {
    const pembayaran = await Pembayaran.findAll({
      include: [Penghuni, Rumah]
    });
    res.status(200).json(pembayaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReportPembayaran = async (req, res) => {
  try {
    const summary = await Pembayaran.findAll({
      attributes: [
        [sequelize.fn('sum', sequelize.col('iuran_kebersihan')), 'total_kebersihan'],
        [sequelize.fn('sum', sequelize.col('iuran_satpam')), 'total_satpam']
      ]
    });
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
