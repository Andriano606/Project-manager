import React from 'react';

import './AddNewProjectPage.css';
import { Formik } from 'formik';
import MyDatepicker from '../helpers/MyDatepicker/MyDatepicker';



function AddNewProjectPage(props) {
  return (
    <>
      <Formik
        initialValues={{ title: '', description: '', date: new Date() }}
        onSubmit={(values, { setSubmitting }) => {
          props.onSaveNewProjectHandler(values)
        }}
      >
      {({
        handleChange,
        handleSubmit,
      }) => (
        <div className='flex flex-col h-screen justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-75'>
            <div className='flex justify-end mb-3 '>
              <button className="btn btn-light">
                Cancel
              </button>
              <button className="ml-3 btn btn-dark" type="submit">
                Save
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                TITLE
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="title" 
                type="text" 
                placeholder="title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                DESCRIPTION
              </label>
              <input
                className="shadow block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                id="description" 
                type="text" 
                placeholder="description"
                name="description"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                DUE DATE
              </label>
              <MyDatepicker name="date"/>
            </div>
          </form>
        </div>
      )}
      </Formik>
    </>
  );
}

export default AddNewProjectPage;
