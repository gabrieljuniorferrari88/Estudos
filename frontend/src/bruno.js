import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import api from './services/api';

import './App.css';


export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `kvmskdvs ${Date.now()}`,
      owner: 'Bruno Mariano'
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="fodase" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adionar</button>
    </>
  )


}