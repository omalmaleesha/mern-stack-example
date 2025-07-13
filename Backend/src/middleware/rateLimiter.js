import ratelimit from "../config/upstash.js";

const ratelimiter = async (req,res,next)=>{
    try {
        const {success} = await ratelimit.limit("my-rate-limit");
        if(!success) { return res.status(429).json({massge:"Too many requests"});}
        next();
    } catch (error) {
        console.error("Error in ratelimiter" ,error);
        next(error);
    }
}

export default ratelimiter;