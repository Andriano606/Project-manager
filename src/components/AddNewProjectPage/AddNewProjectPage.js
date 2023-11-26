import React from 'react';

import './AddNewProjectPage.css';
import { Formik } from 'formik';
import MyDatepicker from '../helpers/MyDatepicker/MyDatepicker';



function AddNewProjectPage() {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '', date: new Date() }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className='flex flex-col h-screen justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-75'>
            <div className='flex justify-end mb-3 '>
              <button className="btn btn-light">
                Cancel
              </button>
              <button className="ml-3 btn btn-dark" type="submit" disabled={isSubmitting}>
                Save
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                TITLE
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                DESCRIPTION
              </label>
              <input
                className="shadow block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="description" type="text" placeholder="description"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <MyDatepicker name="date"/>

          </form>
        </div>
      )}
      </Formik>
    </>
  );
}

export default AddNewProjectPage;
