// rfce
// import React from 'react'

// function ListEmployeeComponent() {
//   return (
//     <div>ListEmployeeComponent</div>
//   )
// }

// export default ListEmployeeComponent

// rafce
import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
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