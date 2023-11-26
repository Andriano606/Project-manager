import React from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import EmptyProjectPage from './components/EmptyProjectPage/EmptyProjectPage';
import AddNewProjectPage from './components/AddNewProjectPage/AddNewProjectPage';
import ProjectShowPage from './components/ProjectShowPage/ProjectShowPage';

function App() {
  return (
   <div className='w-full h-[calc(100dvh)] d-flex flex-row'>
    <div className='w-4/12 h-[calc(100dvh)] bg-slate-100'>
      <SideBar/>
    </div>
    <div className='w-full h-[calc(100dvh)]'>
      {/* <EmptyProjectPage/> */}
      {/* <AddNewProjectPage/> */}
      <ProjectShowPage/>
    </div>
   </div>
  );
}

export default App;
