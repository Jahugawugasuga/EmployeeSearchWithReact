import React from 'react'
import Moment from "moment";

function Table(props) {

    return (
        <table className="table is-fullwidth">
            <thead className="thead-dark">
                <tr>
                    <th>Image</th>
                    <th>
                        <button type="button" onClick={() => props.sortFirstName()}
                            className="btn-dark fa fa-sort"
                        >
                            First Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => props.sortLastName()}
                            className="btn-dark fa fa-sort"
                        >
                            Last Name
                        </button>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th> DOB</th>
            
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee, index) => (
                    <tr key={index}>
                        <td><img src={employee.image} alt={employee.first}/></td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{Moment(employee.dob).format("MMMM D, YYYY")}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table;