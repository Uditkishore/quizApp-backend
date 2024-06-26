const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://uditkishor:uditkishor@cluster0.uinlam3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use('/api', Routes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));