import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
const ListEmployeeComponent = props => {
    const[employees,setEmployees]=useState([]);
    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch((error)=>{
            console.error(error);
        })
    })
  return (
    <div className='container'>
      <h1 className='text-center'>List Of Employees</h1>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee=>
                    <tr id={employee.id}>
                     <td>{employee.id}</td>
                     <td>{employee.firstName}</td>
                     <td>{employee.lastName}</td>
                     <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
