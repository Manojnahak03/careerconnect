import express from 'express';
import {createJob , getAllJob , updateJob , deleteJob} from '../controllers/jobController.js';
const router = express.Router();

router.post("/add",createJob);
router.get("/",getAllJob);
router.put("/update/:id",updateJob);
router.delete("/delete/:id",deleteJob);

export default router;