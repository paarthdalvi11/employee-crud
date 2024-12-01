import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ employee, handleDelete }) {
  return (
    <>
      <div className="inline-flex flex-col justify-center py-6 px-5 mb-10 card">
        <p className="font-bold mb-4 text-xl">{employee.name}</p>
        <p className="text-sm mb-1">{employee.age}</p>
        <p className="text-sm mb-1">{employee.email}</p>
        <p className="text-sm mb-1">{employee.address}</p>
        <p className="text-sm mb-1">{employee.salary}</p>
        <p className="text-sm mb-1">{employee.designation}</p>
        <div className="flex gap-2 mt-4 w-[100%]">
          <Link to={`/update/${employee._id}`} className="block w-[90%]">
            <button
              type="button"
              className="text-white w-full bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Update
            </button>
          </Link>
          <button
            type="button"
            className="focus:outline-none w-full text-white text-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={() => handleDelete(employee._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
