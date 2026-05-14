const Project = require('../models/Project');


const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, description, liveLink, githubLink, techStack } = req.body;

    let parsedTechStack = techStack;

    if (typeof techStack === "string") {
      try {
        parsedTechStack = JSON.parse(techStack);
      } catch (e) {
        parsedTechStack = techStack.split(",").map((s) => s.trim());
      }
    }

    const project = new Project({
      title,
      description,
      techStack: parsedTechStack,
      imageUrl: req.file ? req.file.path : "",
      cloudinaryId: req.file ? req.file.filename : "",
      liveLink,
      githubLink,
    });

    const createdProject = await project.save();

    res.status(201).json(createdProject);

  } catch (error) {
    console.error("CREATE PROJECT ERROR:", error);

    res.status(500).json({
      message: error.message,
      error,
    });
  }
};


const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      await project.deleteOne();
      res.json({ message: 'Project removed' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject, deleteProject };