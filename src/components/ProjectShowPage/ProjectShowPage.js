import { useState, useRef, React } from 'react';

import './ProjectShowPage.css';
import { Formik } from 'formik';
import TaskList from '../TaskList/TaskList'

function ProjectShowPage(props) {
  const [tasks, setTasks] = useState(props.project.tasks)

  const textInput = useRef(null)

  return (
   <div className="m-5">
      <div className='flex justify-between'>
        <h1 className='text-slate-500'>{props.project.title}</h1>
        <button item_id={props.project.id} onClick={props.onDeleteProgectHandler} type="button" className="btn btn-outline-danger" >
            Delete
      </button>
      </div>
      <p className='text-slate-400 font-bold text-xl'>{new Date(props.project.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p className='multiline-text'>{props.project.description}</p>
      <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <h1 className='mb-3 text-slate-700'>{'Tasks'}</h1>

      <Formik
        initialValues={{ title: '' }}
        onSubmit={(values) => {
          setTasks([
            ...tasks,
            { id: props.project.tasks.length, title: values.title }
          ]);
          
          props.project.addNewTasks(props.project.tasks.length, values.title)

          textInput.current.value = ''
        }}
      >
      {({
        handleSubmit,
        handleChange
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              ref={textInput}
              onChange={handleChange}
              className="shadow border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="task name" name="title"
            />
            <button className="ml-3 btn btn-dark" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
      </Formik>

      <TaskList project={props.project}/>
   </div>
  );
}

export default ProjectShowPage;
