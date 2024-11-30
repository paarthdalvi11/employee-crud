import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

function Home() {

  const [employees, setEmployees] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, [])

  async function handleDelete(id) {
    try {
      const check = confirm("Are You Sure You Want To Delete?");
      if(check){
        await axios.delete(`/api/employee/${id}`);
        setEmployees(employees.filter(employee => employee._id !== id)); // Remove deleted employee from state
      }
      
    } catch (error) {
      console.log('Delete Error', error);
    }
  }
  
  async function fetchEmployees() {
    try{
      const { data } = await axios.get('/api/employee')
      setEmployees(data);
    }
    catch(error){
      console.log(error)
    }
  }

  console.log(employees);

  return (
    <>
    <div className="p-4">
      <h1 className="text-4xl text-center font-bold mt-6 mb-10">All Employees</h1>
      <Link to='/insert'>
          <button type="button" className="absolute right-12 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">+ New</button>
      </Link>
    </div>
    <div className="px-14">
      <table className='overflow-x-hidden w-full border-seperate border-spacing-2 mt-20 mb-20'>
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md px-3 py-3">Sr. No.</th>
            <th className="border border-slate-600 rounded-md px-3 py-3">Name</th>
            <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hidden">Age</th>
            <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hidden">Email</th>
            <th className="border border-slate-600 rounded-md px-3 py-3 max-md:hi15dden">Location</th>
            <th className="border border-slate-600 rounded-md px-3 py-3">Salary</th>
            <th className="border border-slate-600 rounded-md px-3 py-3">Designation</th>
            <th className="border border-slate-600 rounded-md px-3 py-3">Operations</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee._id} className='h-8'>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3'>{index + 1}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3'>{employee.name}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden'>{employee.age}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden'>{employee.email}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3 max-md:hidden'>{employee.address}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3'>{employee.salary}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3'>{employee.designation}</td>
              <td className='border border-slate-600 rounded-md text-center px-3 py-3'>
              <Link to={`/update/${employee._id}`}><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button></Link>
              {/* <Link to={`/delete/${employee._id}`}> */}
              <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => handleDelete(employee._id)}>Delete</button>
              {/* </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home