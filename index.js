const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const cookieParser = require('cookie-parser');

const Authrouter = require('./routes/auth.js');
const hotelrouter = require('./routes/hotels.js');
const flightrouter = require('./routes/flight.js');
const userrouter = require('./routes/users.js');
const tourrouter = require('./routes/tour.js');
const galleryItemrouter = require('./routes/galleryItem.js');
const galleryItem = require('./models/galleryItem.js');
const TourItem = require('./models/tour.js');
const HotelItem = require('./models/hotel.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB!');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Disconnected');
});

app.use(express.json());
app.use(cors());
app.use(Authrouter);
app.use(flightrouter);
app.use(hotelrouter);
app.use(userrouter);
app.use(tourrouter);
app.use(galleryItemrouter);
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
});

// --GalleryItems--
app.post('/upload', upload.single('file'), (req, res) => {
  const image = req.file.filename;
  const { comment, username } = req.body;

  galleryItem
    .create({ image, comment, username })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get('/getImage', (req, res) => {
  galleryItem
    .find()
    .then((galleryItems) => res.json(galleryItems))
    .catch((err) => res.json(err));
});

// --TourItems--
app.post('/tour', upload.single('file'), (req, res) => {
  const image = req.file.filename;
  const { username, price, destination, rating } = req.body;

  TourItem
    .create({ image, price, destination, rating })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get('/getTourItems', (req, res) => {
  TourItem
    .find()
    .then((TourItems) => res.json(TourItems))
    .catch((err) => res.json(err));
});


//server
app.listen(port, () => {
  connect();
  console.log('Server is listening on port', port);
});
