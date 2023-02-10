import React, { Component } from "react";
import Display from "./Display";

class User extends Component {
  state = {
    firstName: 90,
    age: 20,
    arr: [90, 10, 30],
    emp: [
      {
        id: 1,
        salary: 90090,
      },
      {
        id: 2,
        salary: 1098290,
      },
      
    ],
    contact: {
        contactNumber:999999, 
        email: 'admin@gmail.com'
    },
    isMarried: true,
    strOrNum: 90
  };

  render() {
    return (
      <div>
        <Display
          firstName={this.state.firstName}
          emp={this.state.emp}
          isMarried={this.state.isMarried}
          contact= {this.state.contact}
          strOrNum = {this.state.strOrNum}
        />
      </div>
    );
  }
}

export default User;
