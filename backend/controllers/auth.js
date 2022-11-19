const User = require('../models/user');
const jwt = require('jsonwebtoken');
const debug = require('debug')('backend:auth');

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const { token, refreshToken } = provideToken(user);

    debug('User logged in, ', user.username);
    res.status(200).json({
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },
        token: token,
        refreshToken: refreshToken
    });
};

module.exports.register = async (req, res) => {
    debug('Registering user');
    debug(req.body);
    const { username, email, password } = req.body;
    debug(username, email, password);
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = await new User({
        username,
        email,
        password
    }).save();
    debug('User registered, ', newUser);

    const { token, refreshToken } = provideToken(newUser);

    debug('User registered, ', newUser.username);
    res.status(200).json({
        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        },
        token: token,
        refreshToken: refreshToken
    });
};

const provideToken = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 hours
    });

    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 604800 // 7 days
    });

    return {
        token,
        refreshToken
    }
}