import express  from "express";
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then( () => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
}
);

app.get('/api/user', userRouter);
app.use('/api/auth', authRouter);
  