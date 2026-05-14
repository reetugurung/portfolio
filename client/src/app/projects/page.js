"use client";
import { useEffect, useState } from 'react';
import API from '../../services/api';
import Project from '../../components/Project'

export default function AllProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await API.get('/projects');
        setProjects(data); 
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <main className="pt-32 pb-12 px-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-slate-800 dark:text-white">
        All Projects
      </h1>
      <Project projects={projects} /> 
    </main>
  );
}