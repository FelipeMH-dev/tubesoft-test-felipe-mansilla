import { Router } from "express";
const router = Router();

import { createTimestamp, getTimestamps, getOneTimestamp, deleteTimestamp, updateTimestamp } from "../controllers/timestamp.controller";

// /api/timestamps/
router.post('/', createTimestamp);
router.get('/', getTimestamps);

// /api/timestamps/:timestampID
router.get('/:id', getOneTimestamp);
router.delete('/:id', deleteTimestamp);
router.put('/:id', updateTimestamp);

export default router;