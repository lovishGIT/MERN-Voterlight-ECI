import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan"
import mongoose from "mongoose";
// import { votersLogin } from "./controllers/userController";
// import VoteRouter from "./routes/voteRouter";

const app= express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    allowedHeaders: ['method','Content-Type','Authorization','cache','body']
}))


// app.use((req, res, next )=> {
    //     next( createHttpError(404, "Endpoint not found") );
    // })
    
// app.use('/api/vote',VoteRouter)
// app.use((error, req, res, next)=> {
//     console.log(error);
//     if(isHttpError(error)) {
//         res.status(error).sendStatus(500);
//     }
// }) 

app.post("/api/vote/login", (req, res)=> {
    let time = new Date().toLocaleString();
    console.log("logged in at",time,"\n",req.body);
    res.sendStatus(200);
});

// app.post("/api/vote/login",votersLogin)


mongoose.connect(process.env.MONGODB_URI)
    .then(()=> {
        console.log("Database Connected");
        app.listen(process.env.PORT, ()=> {
            console.log(`Server Listenning at Port: ${process.env.PORT}`);
        })
    })
    .catch(console.error)