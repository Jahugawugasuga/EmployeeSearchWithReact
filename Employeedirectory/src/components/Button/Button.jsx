import React from 'react'
import './style.css'

function Button(props) {
    return (
        <form className="search">
            <div className="buttons">
                <label htmlFor="employees">Search Employee Here:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="employeeSearch"
                    type="text"
                    placeholder="Example `John Smith` "
                    className="form-control"
                    id="employeeSearch"
                />

            </div>
        </form>

    );
}

export default Button