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
            userInfo: {
                name: json.name,
                location: json.location,
                contact: json.twitter_username,
                image: json.avatar_url
            }
         })
        console.log('Child ComponentDidMount')
    }

    render() {
        const {name, location, contact, image} = this.state.userInfo;

        console.log('Child Render')
        return (
        <div className="user-card">
        <img src={image} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        </div>
        )
    }
}

export default UserClass;