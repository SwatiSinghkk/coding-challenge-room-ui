const express = require('express');
const cors = require('cors');
const buildingRoutes = require('./routes/buildingRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/building', buildingRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
