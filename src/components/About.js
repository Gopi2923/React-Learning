import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component {
  constructor(props) {
    super(props);

    console.log('Parent Constructor')
  }

  componentDidMount() {
    console.log('Parant Did Mount')
  }

  render() {
    console.log('Parent Render')
    return (
      <div>
        <h1>About</h1>
        <UserClass />
      </div>
    )
  }
}

export default About;
