const {Rumah} = require('../models');

exports.getRumah = async (req, res) => {
  try {
    const rumah = await Rumah.findAll();
    res.json(rumah);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRumahById = async (req, res) => {
  try {
    const rumah = await Rumah.findByPk(req.params.id);
    if (rumah) {
      res.json(rumah);
    } else {
      res.status(404).json({ message: 'Rumah tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRumah = async (req, res) => {
  try {
    console.log(req.body)
    const rumah = await Rumah.create(req.body);
    res.status(201).json(rumah);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateRumah = async (req, res) => {
  try {
    const rumah = await Rumah.findByPk(req.params.id);
    if (rumah) {
      await rumah.update(req.body);
      res.json(rumah);
    } else {
      res.status(404).json({ message: 'Rumah tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRumah = async (req, res) => {
  try {
    const rumah = await Rumah.findByPk(req.params.id);
    if (rumah) {
      await rumah.destroy();
      res.json({ message: 'Rumah berhasil dihapus' });
    } else {
      res.status(404).json({ message: 'Rumah tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRumahStatus = async (req, res) => {
  try {
    const rumah = await Rumah.findByPk(req.params.id);
    if (!rumah) {
      return res.status(404).json({ message: 'Rumah not found' });
    }
    rumah.status_huni = req.body.status_huni;
    await rumah.save();
    res.status(200).json(rumah);
  } catch (error) {
    res.status(500).json({ message: 'Error updating rumah status', error });
  }
};