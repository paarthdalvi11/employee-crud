import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table/Table";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

  function Home() {
  const [toggle, setToggle] = useState(
    () => JSON.parse(localStorage.getItem("layout")) ?? true // Default to `true` (table layout)
  );

  useEffect(() => {
    localStorage.setItem("layout", JSON.stringify(toggle)); // Save layout state to localStorage
  }, [toggle]);

  const [employees, setEmployees] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, [toggle]);
  
  function changeLayout() {
    setToggle(!toggle)
  }

  async function handleDelete(id) {
    try {
      const check = confirm("Are You Sure You Want To Delete?");
      if (check) {
        await axios.delete(`/api/employee/${id}`);
        setEmployees(employees.filter((employee) => employee._id !== id)); // Remove deleted employee from state
      }
    } catch (error) {
      console.log("Delete Error", error);
    }
  }

  async function fetchEmployees() {
    try {
      const { data } = await axios.get("/api/employee");
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(employees);

  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-center font-bold mt-6 mb-10">
          All Employees
        </h1>
        <button
            type="button"
            onClick={changeLayout}
            className="absolute right-40 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Change Layout
        </button>
        <Link to="/insert">
          <button
            type="button"
            className="absolute right-12 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            + New
          </button>
        </Link>
      </div>

      <div className="px-14">
        {toggle ? (
          <table className="w-full border-seperate border-spacing-2 mt-20 mb-20">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md px-3 py-3">
                  Sr. No.
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3">
                  Name
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hidden">
                  Age
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hidden">
                  Email
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hi15dden">
                  Location
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3">
                  Salary
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3">
                  Designation
                </th>
                <th className="border border-slate-600 rounded-md px-3 py-3">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <Table key={employee._id} employee={employee} index={index} handleDelete={handleDelete}/>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex my-20 items-center justify-evenly gap-6 flex-wrap">
            {employees.map((employee, index) => (
              <div key={employee._id}>
                <Card employee={employee} handleDelete={handleDelete}></Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
