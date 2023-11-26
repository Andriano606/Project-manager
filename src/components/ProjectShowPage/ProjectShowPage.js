import './ProjectShowPage.css';
import { Formik } from 'formik';
import TaskList from '../TaskList/TaskList'

function ProjectShowPage() {
  
  return (
   <div className="m-5">
      <div className='flex justify-between'>
        <h1 className='text-slate-500'>{'Learning React'}</h1>
        <button type="button" className="btn btn-outline-danger" >
            Delete
      </button>
      </div>
      <p className='text-slate-400 font-bold text-xl'>{'Dec 29, 2024'}</p>
      <p>{'Learn React from the group up.'}</p>
      <p className='multiline-text'>{'Start with the basics, finish with advanced knowledge Start with the basics, finish with advanced knowledge Start with the basics, finish with advanced knowledge Start with the basics, finish with advanced knowledge Start with the basics, finish with advanced knowledge'}</p>
      <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <h1 className='mb-3 text-slate-700'>{'Tasks'}</h1>

      <Formik
        initialValues={{ task: '' }}
        onSubmit={(values, { setSubmitting }) => {
          
        }}
      >
      {({
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className="shadow border rounded w-50 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="task name" name="task"
            />
            <button className="ml-3 btn btn-dark" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
      </Formik>

      <TaskList/>
   </div>
  );
}

export default ProjectShowPage;
