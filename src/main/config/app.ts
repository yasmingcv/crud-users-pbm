import express from "express";
import setupRoute from './routes'
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());
setupRoute(app)
export { app }