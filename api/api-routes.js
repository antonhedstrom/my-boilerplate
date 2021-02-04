const path = require('path');


const express = require('express');
const { Op } = require('sequelize');

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/book', bookRoutes);

// Catching all API routes so we don't fallback to index.html route in app.
router.all('*', (req, res, next) => {
  res.status(404).json({
    message: 'Path not found',
    path: req.originalUrl,
    method: req.method.toUpperCase(),
    ts: new Date(),
  });
});

module.exports = router;
