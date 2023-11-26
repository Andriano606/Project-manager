import { useState, React } from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import EmptyProjectPage from './components/EmptyProjectPage/EmptyProjectPage';
import AddNewProjectPage from './components/AddNewProjectPage/AddNewProjectPage';
import ProjectShowPage from './components/ProjectShowPage/ProjectShowPage';

function App() {
  const [projects, setProjects] = useState([
    {id: 0, title: '', description: '', tasks: [''] }
  ])

  const [addNewProject, setAddNewProject] = useState(false);
  const [showProjectPage, setShowProjectPage] = useState(null);
  

  return (
   <div className='w-full h-[calc(100dvh)] d-flex flex-row'>
    <div className='w-4/12 h-[calc(100dvh)] bg-slate-100'>
      <SideBar onAddNewProject={setAddNewProject}/>
    </div>
    <div className='w-full h-[calc(100dvh)]'>
      { pageToRender(projects, addNewProject, showProjectPage, setAddNewProject) }
    </div>
   </div>
  );
}

function pageToRender(projects, addNewProject, setShowProjectPage, setAddNewProject) {
  if (projects.length == 0 && !addNewProject) {
    return <EmptyProjectPage onAddNewProject={setAddNewProject}/>
  } else if (addNewProject) {
    return <AddNewProjectPage/>
  } else if (setShowProjectPage) {
    return <ProjectShowPage/>
  } else {
    return <EmptyProjectPage onAddNewProject={setAddNewProject}/>
  }
}

export default App;
