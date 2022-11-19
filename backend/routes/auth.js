const { login, register } = require('../controllers/auth');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: 'Auth api is working' });
})

router.post('/login', login);

router.post('/register', register);

module.exports = router;
