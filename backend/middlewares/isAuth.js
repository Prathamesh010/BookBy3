const debug = require('debug')('backend:auth');
const jwt = require('jsonwebtoken');
const isAuth = (req, res, next) => {
    debug('isAuth');
    var token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const tokenParts = token.split(' ');
    token = tokenParts[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.userId = decoded.userId;
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    next();
}

module.exports = isAuth;