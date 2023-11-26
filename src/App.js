import React from 'react';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import EmptyProjectPage from './components/EmptyProjectPage/EmptyProjectPage';

function App() {
  return (
   <div className='w-100 h-100 d-flex flex-row'>
    <div className='w-25'>
      <SideBar/>
    </div>
    <div className='w-100'>
      <EmptyProjectPage/>
    </div>
   </div>
  );
}

export default App;
