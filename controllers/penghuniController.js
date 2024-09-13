// controllers/penghuniController.js
const { Penghuni } = require('../models');

exports.createPenghuni = async (req, res) => {
  try {
    const { nama_lengkap, status_penghuni, nomor_telepon, status_perkawinan } = req.body;
    const foto_ktp = req.file ? req.file.path : null;
    console.log(req.body)
    const penghuni = await Penghuni.create({
      nama_lengkap,
      status_penghuni,
      nomor_telepon,
      status_perkawinan,
      foto_ktp,
    });

    res.status(201).json(penghuni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePenghuni = async (req, res) => {
  try {
    const penghuni = await Penghuni.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(penghuni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPenghuni = async (req, res) => {
  try {
    const penghuni = await Penghuni.findAll();
    res.status(200).json(penghuni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
