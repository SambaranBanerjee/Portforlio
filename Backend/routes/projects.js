import express from 'express';
import Projects from '../models/projects.js';
const app = express();
app.use(express.json());
const router = express.Router();

router.get('/', async (req,res) => {
    const projects = await Projects.find();
    res.json(projects);
})

router.post('/', async (req,res)=>{
    const newProject = new Projects(req.body);
    await newProject.save();
    res.status(201).json(newProject);
})

module.exports = router;
