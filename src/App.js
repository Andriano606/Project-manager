import { useState, React } from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import EmptyProjectPage from './components/EmptyProjectPage/EmptyProjectPage';
import AddNewProjectPage from './components/AddNewProjectPage/AddNewProjectPage';
import ProjectShowPage from './components/ProjectShowPage/ProjectShowPage';

import { Project } from "./objects/project";

function App() {
  const [projects, setProjects] = useState([])

  const [showProjectPage, setShowProjectPage] = useState(null);

  const addNewProjectHandler = () => {
    setCurrentPage(<AddNewProjectPage onSaveNewProjectHandler={saveNewProjectHandler}/>)
  }

  const [currentPage, setCurrentPage] = useState(<EmptyProjectPage onAddNewProjectHandler={addNewProjectHandler}/>);

  const saveNewProjectHandler = (values) => {
    let newProject = new Project(projects.length, values.title, values.description, values.date)

    setProjects(prevProjects => {  
      const updatedProjects = [...prevProjects];
      updatedProjects.unshift(newProject);
      
      return updatedProjects;
    })

    setCurrentPage(<ProjectShowPage project={newProject}/>)
  }

  return (
   <div className='w-full h-[calc(100dvh)] d-flex flex-row'>
    <div className='w-4/12 h-[calc(100dvh)] bg-slate-100'>
      <SideBar onAddNewProjectHandler={addNewProjectHandler} projects={projects}/>
    </div>
    <div className='w-full h-[calc(100dvh)]'>
      {currentPage}
    </div>
   </div>
  );
}

export default App;
