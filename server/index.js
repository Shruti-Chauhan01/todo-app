const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes'); // ✅ IMPORT THIS

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/todos', todoRoutes); // ✅ USE THE ROUTES HERE

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
