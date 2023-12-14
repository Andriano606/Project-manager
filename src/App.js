import { useState, React } from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import EmptyProjectPage from './components/EmptyProjectPage/EmptyProjectPage';
import AddNewProjectPage from './components/AddNewProjectPage/AddNewProjectPage';
import ProjectShowPage from './components/ProjectShowPage/ProjectShowPage';

import { Project } from "./objects/project";

function App() {
  const [projects, setProjects] = useState([])
  const [project, setCurrentProject] = useState(null)

  const openEmptyPage = () => {
    setCurrentPage(<EmptyProjectPage onAddNewProjectHandler={addNewProjectHandler}/>)
    setCurrentProject(null)
  }

  const deleteProgectHandler = (event) => {
    let id = Number(event.target.getAttribute('item_id')) 
  
    setProjects(projects.filter(item => item.id !== id))
    openEmptyPage()
  }

  const addNewProjectHandler = () => {
    setCurrentPage(<AddNewProjectPage onSaveNewProjectHandler={saveNewProjectHandler} openEmptyPageHandler={openEmptyPage}/>)
    setCurrentProject(null)
  }

  const [currentPage, setCurrentPage] = useState(<EmptyProjectPage onAddNewProjectHandler={addNewProjectHandler}/>);

  const openProjectPageHandler = (event) => {
    let id = Number(event.target.getAttribute('item_id'))

    let project = projects.find((project) => project.id === id)

    setCurrentProject(project)

    setCurrentPage(<ProjectShowPage project={project} onDeleteProgectHandler={deleteProgectHandler}/>)
  }

  const saveNewProjectHandler = (values) => {
    let newProject = new Project(projects.length, values.title, values.description, values.date)

    setProjects(prevProjects => {  
      const updatedProjects = [...prevProjects];
      updatedProjects.push(newProject);
      
      return updatedProjects;
    })

    setCurrentPage(<ProjectShowPage project={newProject} onDeleteProgectHandler={deleteProgectHandler}/>)
  }

  return (
   <div className='w-full h-[calc(100dvh)] d-flex flex-row'>
    <div className='w-4/12 h-[calc(100dvh)] bg-slate-100'>
      <SideBar onAddNewProjectHandler={addNewProjectHandler} currentProject={project} projects={projects} onOpenProjectPageHandler={openProjectPageHandler}/>
    </div>
    <div className='w-full h-[calc(100dvh)]'>
      {currentPage}
    </div>
   </div>
  );
}

export default App;
