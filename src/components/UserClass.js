import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        // console.log(this.props.name + "Children construtor")
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummy-photo.com"

            }
        };
    }

    async componentDidMount(){
        // console.log(this.props.name + "Children component did mount")

        const data = await fetch("https://api.github.com/users/SARABJOT2239");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render() {
        //  console.log(this.props.name + "Children render")
         const { name, location, avatar_url } = this.state.userInfo;

         return (
              <div className="user-card">
                <img className="gitApiAvatar" src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: sarabjot1609@gmail.com</h4>
              </div> 
            );
    }
}

export default UserClass;