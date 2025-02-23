import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)
        this.state = {
            userInfo: {
                name: "Gopi D",
                Location: "Banglore",
                Contact: "@gopi2923"
            }
        }
        console.log('Child Constructor')
    }

   async componentDidMount() {
        const data = await fetch('https://api.github.com/users/gopi2923')
        const json = await data.json()
        console.log(json)

         this.setState({
            userInfo: json
         })
        console.log('Child ComponentDidMount')
    }

    componentDidUpdate() {
        console.log('Component Did Update')
    }

    componentWillUnmount() {
        console.log("Component Will Mount")
    }

    render() {
        const {name, location, bio, avatar_url} = this.state.userInfo;

        console.log('Child Render')
        return (
        <div className="user-card">
        <img src={avatar_url} className="logo"/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {bio}</h4>
        </div>
        )
    }
}

export default UserClass;