import { useState } from 'react';
import axios from 'axios';
import '../styles/admin.css';

export default function AdminProjectForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    thumbnail: '',
    githubLink: '',
    liveLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, thumbnail: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects', form);
      alert('✅ Project submitted successfully!');
      setForm({
        title: '',
        description: '',
        thumbnail: '',
        githubLink: '',
        liveLink: ''
      });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to submit project');
    }
  };

  return (
    <div className="admin-form-wrapper fade-in">
      <h2>Add New Project</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project Title"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows="4"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        {/* 👇 Image Preview Section */}
        {form.thumbnail && (
          <div className="image-preview">
            <img src={form.thumbnail} alt="Thumbnail Preview" />
          </div>
        )}

        <input
          name="githubLink"
          value={form.githubLink}
          onChange={handleChange}
          placeholder="GitHub Repository Link"
        />

        <input
          name="liveLink"
          value={form.liveLink}
          onChange={handleChange}
          placeholder="Live Preview Link"
        />

        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
}
