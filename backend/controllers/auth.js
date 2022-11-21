const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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

module.exports.refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(401).json({ message: 'No refresh token provided' });
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { token, refreshToken: newRefreshToken } = provideToken(user);
        res.status(200).json({
            token: token,
            refreshToken: newRefreshToken
        });
    } catch (error) {
        debug(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const provideToken = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 900 // 15 mins
    });

    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 604800 // 7 days
    });

    return {
        token,
        refreshToken
    }
}