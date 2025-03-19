const jwt = require("jsonwebtoken");
const Admin = require("../models/adminSchema");

const isAdmin = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) return res.status(401).json({ message: "Unauthorized. No token provided." });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findById(decoded.userId);

        if (!admin || admin.role !== "Admin") return res.status(403).json({ message: "Access denied. Admins only." });

        req.admin = admin;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token or unauthorized" });
    }
};

module.exports = { isAdmin };
