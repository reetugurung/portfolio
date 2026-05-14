"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import API from '../../services/api';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    liveLink: '',
    githubLink: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    const { data } = await API.get('/projects');
    setProjects(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('liveLink', formData.liveLink);
    data.append('githubLink', formData.githubLink);
    data.append('image', image);
  
    const techArray = formData.techStack.split(',').map(item => item.trim());
    data.append('techStack', JSON.stringify(techArray));

    try {
      await API.post('/projects', data,
        {
          headers: {
      'Content-Type': 'multipart/form-data',
    },
        }
      );
      alert('Project added successfully!');
      setFormData({ title: '', description: '', techStack: '', liveLink: '', githubLink: '' });
      setImage(null);
      fetchProjects();
    } catch (err) {
  console.error("FULL ERROR:", err); // This will show more detail in the browser console
  alert('Upload failed. Check if your server is running on port 5001.');
}finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this project?')) {
      await API.delete(`/projects/${id}`);
      fetchProjects();
    }
  };

  return (
    <main className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={() => { localStorage.clear(); router.push('/login'); }}
          className="text-red-500 font-semibold"
        >
          Logout
        </button>
      </div>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border mb-10 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <input 
          type="text" placeholder="Project Title" className="w-full p-2 border rounded"
          value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required
        />
        <textarea 
          placeholder="Description" className="w-full p-2 border rounded"
          value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required
        />
        <input 
          type="text" placeholder="Tech Stack (comma separated: React, Node, etc.)" className="w-full p-2 border rounded"
          value={formData.techStack} onChange={(e) => setFormData({...formData, techStack: e.target.value})}
        />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Live Link" className="p-2 border rounded" value={formData.liveLink} onChange={(e) => setFormData({...formData, liveLink: e.target.value})} />
          <input type="text" placeholder="GitHub Link" className="p-2 border rounded" value={formData.githubLink} onChange={(e) => setFormData({...formData, githubLink: e.target.value})} />
        </div>
        <input 
          type="file" onChange={(e) => setImage(e.target.files[0])} 
          className="w-full p-2 border border-dashed rounded bg-slate-50" required
        />
        <button 
          disabled={loading}
          className="w-full bg-green-600 text-white p-3 rounded font-bold hover:bg-green-700 disabled:bg-slate-400"
        >
          {loading ? 'Uploading to Cloudinary...' : 'Upload Project'}
        </button>
      </form>

      {/* List of current projects */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Current Projects</h2>
        {projects.map(p => (
          <div key={p._id} className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <img src={p.imageUrl} className="w-12 h-12 object-cover rounded" alt="" />
              <span className="font-medium">{p.title}</span>
            </div>
            <button onClick={() => handleDelete(p._id)} className="text-red-500 hover:underline">Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}