const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // This allows your frontend to talk to backend

// ...other backend setup code like routes, DB connection, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
