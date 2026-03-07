const jwt = require('jsonwebtoken');

const protect = (req, res, next) => { // Inga 'next' add panniyachi ✅
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer')) {
        try {
            // Token-ai split panni edukkuroam
            token = token.split(' ')[1];
            
            // Secret key vachi verify pannuroam
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // User info-vai request object-la store pannuroam
            req.user = decoded; 
            
            next(); // Idhu dhaan unga route-ku (product add) anuppum ✅
        } catch (error) {
            console.error("Token verification error:", error.message);
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else {
        res.status(401).json({ message: "No token, authorization denied" });
    }
};

module.exports = { protect };