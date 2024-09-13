const express = require('express');
const cors = require('cors');
const penghuniRoutes = require('./routes/penghuni');
const rumahRoutes = require('./routes/rumah');
const pembayaranRoutes = require('./routes/pembayaran');
const pengeluaranRoutes = require('./routes/pengeluaran');
const rumahPenghuniRoutes = require('./routes/rumahPenghuni');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/penghuni', penghuniRoutes);
app.use('/api/rumah', rumahRoutes);
app.use('/api/pembayaran', pembayaranRoutes);
app.use('/api/pengeluaran', pengeluaranRoutes);
app.use('/api/rumah-penghuni', rumahPenghuniRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
