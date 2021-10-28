// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Record from "../models/Record";

// Global Config
export const recordsRouter = express.Router();

recordsRouter.use(express.json());

// GET
recordsRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const recs = (await collections.records.find({}).toArray()) as Record[];

        res.status(200).send(recs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

recordsRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {

        const query = { _id: new ObjectId(id) };
        const recs = (await collections.records.findOne(query)) as Record;

        if (recs) {
            res.status(200).send(recs);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

// POST

// PUT

// DELETE