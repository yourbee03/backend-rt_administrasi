const express = require('express');
const app = express();
const penghuniRoutes = require('./routes/penghuni');
const rumahRoutes = require('./routes/rumah');
const pembayaranRoutes = require('./routes/pembayaran');
const pengeluaranRoutes = require('./routes/pengeluaran');
const rumahPenghuniRoutes = require('./routes/rumahPenghuni');

app.use(express.json());
app.use('/penghuni', penghuniRoutes);
app.use('/rumah', rumahRoutes);
app.use('/pembayaran', pembayaranRoutes);
app.use('/pengeluaran', pengeluaranRoutes);
app.use('/rumah-penghuni', rumahPenghuniRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



