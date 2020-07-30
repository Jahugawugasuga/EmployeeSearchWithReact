import React, { Component } from "react";
import API from "../utils/API.js";
import Table from "../components/Table";
import Button from "../components/Button"
import Container from "../components/Container"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      shown: []
    };
  }
  loadEmployees = () => {
    API.getDirectory()
      .then(res => {
        let employees = res.data.results;
        let shown = []
        shown = employees.map(emp => ({
          id: emp.id.value,
          image: emp.picture.medium,
          firstName: emp.name.first,
          lastName: emp.name.last,
          phone: emp.phone,
          email: emp.email,
          dob: emp.dob.date
        }))
        let newState = { shown, employees };
        this.setState(newState);

      })
      .catch(err => {
        console.log(err)
      })
  }
      sortFirstName = () => {
        var sortName = this.state.shown.sort(
            sortTableItems
        )
        function sortTableItems(a, b) {
            var nameA = a.firstName.toUpperCase();
            var nameB = b.firstName.toUpperCase();

            let comparison = 0;

            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        };
        this.setState({ shown: sortName })
    };

    sortLastName = () => {
        var sortName = this.state.shown.sort(
            sortTableItems
        )
        function sortTableItems(a, b) {
            var nameA = a.lastName.toUpperCase();
            var nameB = b.lastName.toUpperCase();

            let comparison = 0;

            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        };
        this.setState({ shown: sortName })
    };

  componentDidMount() {
    this.loadEmployees();
  }

  //handle search bar functionality, update search results as user types
  handleInputChange = event => {
    const search = event.target.value
    event.preventDefault();
    let employees = this.state.employees;
    const shown = employees
    .filter(emp =>
      (emp.name.first +" " + emp.name.last).toLowerCase().includes(search.toLowerCase())
    )
    .map(emp => ({
      id: emp.id.value,
      image: emp.picture.medium,
      firstName: emp.name.first,
      lastName: emp.name.last,
      phone: emp.phone,
      email: emp.email,
      dob: emp.dob.date
    }))
    let newState = { shown, employees };
    this.setState(newState);
    
  };
  

  render() {
    return (
      <div>
        <h1 className="text-center">Find your colleagues</h1>
        <Container style={{ minHeight: "80%" }}>
          <Button
            
            handleInputChange={this.handleInputChange}
          
          />
          <Table 
          employees={this.state.shown}
          sortFirstName= {this.sortFirstName}
          sortLastName = {this.sortLastName}
          />
          
        </Container>
      </div>
    );
  }

};

export default Home;