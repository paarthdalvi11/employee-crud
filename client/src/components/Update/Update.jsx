import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [designation, setDesignation] = useState('');
  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    axios
    .get(`/api/employee/${id}`)
    .then((response) => {
      setName(response.data[0].name)
      setAge(response.data[0].age)
      setEmail(response.data[0].email)
      setSalary(response.data[0].salary)
      setAddress(response.data[0].address)
      setDesignation(response.data[0].designation)
    })
  }, [id])

  async function handleUpdate(){
    const data = {
      name,
      age,
      email,
      address,
      salary,
      designation
    }
    await axios.put(`/api/employee/${id}`, data)
      .then(() => {
      navigate('/');
    })
  };
  
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-center font-bold mt-6 mb-10">Insert New Employee</h1>
      </div>
      <div className="flex flex-col border-2 border-black-900 rounded-xl w-[800px] mx-auto p-10">
        <div className="my-4">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gray-500 mb-6 rounded-md px-4 py-2 w-full'/>
          <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className='border-2 border-gray-500 mb-6 rounded-md px-4 py-2 w-full'/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 border-gray-500 mb-6 rounded-md px-4 py-2 w-full'/>
          <input type="text" placeholder="Location" value={address} onChange={(e) => setAddress(e.target.value)} className='border-2 border-gray-500 mb-6 rounded-md px-4 py-2 w-full'/>
          <input type="text" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} className='border-2 border-gray-500 mb-6 rounded-md px-4 py-2 w-full'/>
          <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} className='border-2 border-gray-500 mb-10 rounded-md px-4 py-2 w-full'/>
          <div className='w-[85%] mx-auto block focus:outline-none text-white bg-green-700 hover:bg-green-800 cursor-pointer font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' onClick={handleUpdate}>Submit</div>
        </div>
      </div>

    </>
  )
}

export default Update
