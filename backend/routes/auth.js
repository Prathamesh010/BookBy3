const { login, register, refreshToken } = require('../controllers/auth');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Auth api is working' });
})

router.post('/login', login);

router.post('/register', register);

router.post('/refreshToken', refreshToken);

module.exports = router;
