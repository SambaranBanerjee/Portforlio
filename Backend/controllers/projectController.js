import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

export const addProject = async (req, res) => {
  const { title, description, thumbnail, liveLink, githubLink } = req.body;
  try {
    const newProject = new Project({ title, description, thumbnail, liveLink, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create project' });
  }
};
