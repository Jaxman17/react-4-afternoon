import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({
          studentInfo: results.data
      });
  });
  }

  render() {
    console.log(this.props.history)
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
          {/* <button onClick={() => this.props.history.push(`/classlist/ENG2010`)}>Back</button> */}
          <button onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    )
  }
}

export default withRouter(Student)