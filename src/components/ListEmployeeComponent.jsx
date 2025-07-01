// rfce
// import React from 'react'

// function ListEmployeeComponent() {
//   return (
//     <div>ListEmployeeComponent</div>
//   )
// }

// export default ListEmployeeComponent

// rafce
import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@email.com"
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "janedoe@email.com"
        },
        {
            "id": 3,
            "firstName": "Sona",
            "lastName": "Shi",
            "email": "sonashi@email.com"
        },
        {
            "id": 5,
            "firstName": "Coy-Updated",
            "lastName": "Mzungu",
            "email": "coymzungu@email.com"
        },
        {
            "id": 6,
            "firstName": "test-name",
            "lastName": "test-lname",
            "email": "testuser@email.com"
        }
    ]

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
                        dummyData.map(employee =>
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