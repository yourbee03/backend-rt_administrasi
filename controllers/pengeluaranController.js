const { Pengeluaran } = require('../models');

exports.createPengeluaran = async (req, res) => {
  try {
    const pengeluaran = await Pengeluaran.create(req.body);
    res.status(201).json(pengeluaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPengeluaran = async (req, res) => {
  try {
    const pengeluaran = await Pengeluaran.findAll();
    res.status(200).json(pengeluaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReportPengeluaran = async (req, res) => {
  try {
    const summary = await Pengeluaran.findAll({
      attributes: [
        [sequelize.fn('sum', sequelize.col('jumlah')), 'total_pengeluaran']
      ]
    });
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
