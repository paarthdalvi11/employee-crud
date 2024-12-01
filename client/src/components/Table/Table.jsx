import React from "react";
import { Link } from "react-router-dom";

function Table({ employee, index, handleDelete }) {
  return (
    <tr className="h-8">
      <td className="border border-slate-600 rounded-md text-center px-3 py-3">
        {index + 1}{" "}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3">
        {employee.name}{" "}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden">
        {employee.age}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden">
        {employee.email}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden">
        {employee.address}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3">
        {employee.salary}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3">
        {employee.designation}
      </td>
      <td className="border border-slate-600 rounded-md text-center px-3 py-3">
        <Link to={`/update/${employee._id}`}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update
          </button>
        </Link>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleDelete(employee._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Table;
