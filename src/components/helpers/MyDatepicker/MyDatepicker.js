import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const MyDatePicker = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      className="shadow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      {...field}
      selected={value}
      onChange={(date) => setValue(date)}
    />
  );
};

export default MyDatePicker;