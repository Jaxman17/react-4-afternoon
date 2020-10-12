import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => {
        this.setState({
          students: results.data
      });
  });
  }


  render() {
    const students = this.state.students.map((studentElement, index) => (
      <Link to={`/student/${studentElement.id}`} key={index}><h3>{ studentElement.first_name} {studentElement.last_name}</h3></Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
        <button onClick={() => this.props.history.goBack()}>Back</button>
      </div>
    );
  }
}