import React, { Component } from 'react';
import API from "..utils/API.js";
import Table from "./components/Table";
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        };
    }
    loadEmployees = () => {
        API.searchRandomUser()
            .then(res => {
                this.setState({ employees: res.data.results })

                console.log(this.state.employees)
            })
            .catch(err => {
                console.log(err)
            })
    }
    componentDidMount() {
        this.loadEmployees();
    };
    sortFirstName = () => {
        var sortName = this.state.result.sort(
            sortTableItems
        )
        function sortTableItems(a, b) {
            var nameA = a.name.first.toUpperCase();
            var nameB = b.name.first.toUpperCase();

            let comparison = 0;

            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        };
        this.setState({ employees: sortName })
    };

    sortLastName = () => {
        var sortName = this.state.result.sort(
            sortTableItems
        )
        function sortTableItems(a, b) {
            var nameA = a.name.last.toUpperCase();
            var nameB = b.name.last.toUpperCase();

            let comparison = 0;

            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        };
        this.setState({ employees: sortName })
    };




    render() {
        return (
            <div>
                <h1 className="text-center dark">Find Employees</h1>
                <Table employees={this.state.employees}
                    sortFirstName = {this.sortFirstName}
                    sortLastName = {this.sortLastName}
                />
            </div >
        );
    };
};

export default Home