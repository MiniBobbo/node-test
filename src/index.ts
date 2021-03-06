import express from "express";
import { connectToDatabase } from "./services/database.service"
import { recordsRouter } from "./routes/records.router";


const app = express()
const port = 3000


connectToDatabase()
    .then(() => {
        app.use("/routes", recordsRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });