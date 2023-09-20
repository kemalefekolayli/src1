const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Adminn = require('../models/product_model')

// ...

// Registration route
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdminn = await Adminn.findOne({ where: { username } });
    if (existingAdminn) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Adminn.create({ username, password: hashedPassword });

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Login route
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const adminn = await Adminn.findOne({ where: { username } });
    if (!adminn) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, adminn.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const token = jwt.sign({ adminnId: adminn.id }, 'secret-key', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


