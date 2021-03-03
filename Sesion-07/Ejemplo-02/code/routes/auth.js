const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { body } = req;
  const user = await sequelize.models.users.findOne({ where: {
    email: body.email,
  }});

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a token
  const token = jwt.sign({ userId: user.id }, 'secretkey', {
    expiresIn: 36000,
  });

  return res.json({
    message: 'Authenticated sucessfully',
    token,
  });
});

router.post('/signup', async (req, res) => {
  // TODO: Logic for register users
});

module.exports = router;