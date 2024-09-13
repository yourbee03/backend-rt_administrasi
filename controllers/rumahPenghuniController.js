const {RumahPenghuni, Rumah, Penghuni} = require('../models');
const { Op } = require('sequelize');

exports.getAllRumahPenghuni = async (req, res) => {
  try {
    const data = await RumahPenghuni.findAll({
      include: [Rumah, Penghuni]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPenghuniByRumah = async (req, res) => {
  try {
    const { rumahId } = req.params;
    const data = await RumahPenghuni.findAll({
      where: { rumah_id: rumahId },
      include: [Penghuni]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPenghuniToRumah = async (req, res) => {
  try {
    console.log(req.body)
    const { rumah_id, penghuni_id, tanggal_mulai_huni, tanggal_akhir_huni } = req.body;
    const data = await RumahPenghuni.create({
      rumah_id,
      penghuni_id,
      tanggal_mulai_huni,
      tanggal_akhir_huni
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePenghuniInRumah = async (req, res) => {
  try {
    const { id } = req.params;
    const { rumah_id, penghuni_id, tanggal_mulai_huni, tanggal_akhir_huni } = req.body;
    const data = await RumahPenghuni.update({
      rumah_id,
      penghuni_id,
      tanggal_mulai_huni,
      tanggal_akhir_huni
    }, {
      where: { id }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePenghuniFromRumah = async (req, res) => {
  try {
    const { id } = req.params;
    await RumahPenghuni.destroy({
      where: { id }
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHistoricalPenghuni = async (req, res) => {
    try {
      const { rumahId } = req.params;
      const data = await RumahPenghuni.findAll({
        where: { rumah_id: rumahId },
        include: [Penghuni],
        attributes: ['id', 'penghuni_id', 'tanggal_mulai_huni', 'tanggal_berakhir_huni']
      });
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getCurrentPenghuni = async (req, res) => {
  try {
    const { rumahId } = req.params;
    const currentDate = new Date();
    const data = await RumahPenghuni.findAll({
      where: {
        tanggal_akhir_huni: null,
        tanggal_mulai_huni: {
          [Op.lte]: currentDate // Op.lte means less than or equal to
        }
      },
      include: [Penghuni, Rumah]
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
