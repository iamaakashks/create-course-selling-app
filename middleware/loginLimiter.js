import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
    windowMs: 1000*60*10,
    max: 5,
    message: {
        msg: "too many login attempt, please try again after some time"
    },
    standardHeaders: true,
    legacyHeaders: false
})