import jwt from 'jsonwebtoken'

export const privateRouter = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/api/products");
    }
    next();
};

export const publicRouter = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

export const authPolicies = (roles) => (req, res, next) => {
    try {
        if (roles.includes(req.user.role)) {
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
