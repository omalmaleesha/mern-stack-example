import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import ratelimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();

const app = express();
const port = process.env.PORT || 5001

app.use(cors({
    origin: "http://localhost:5173",
}));
//middleware
// is a function that we can run between the  middle of a req and a res
app.use(express.json());
app.use(ratelimiter);

// app.use((req,res,next)=>{
//     console.log(`The method of the request is ${req.method} & the URL is ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes);

    

//what is an ENDPONIT ?
//An endpoint is  a combination of a URL and HTTP method that lets the client
//interact with a specific resourse


//1xx - information response code
//2xx - 200 , 201  200 means all oky and works as we desire 201 - if use and post req its says the post request is succe and  also creates
//3xx - warning and redirections
//4xx - error in client side 
//5xx - server side error
connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log("Server started on port 5001");
    })
})  