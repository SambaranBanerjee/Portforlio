import mongoose, { mongo } from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  github: String,
  demo: String,
  imageUrl: String
})

const project = mongoose.model("Project", projectSchema);

export default project;