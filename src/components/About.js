import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
   constructor(props){
    super(props);

    // console.log("Parent constructor");
   }

   componentDidMount(){
        // console.log("Parent component did mount")
    }


    render(){
        // console.log("Prent render");

        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is my learning project</h2>
                {/* <User name={"Sarabjot (function)"}/>  */}
                <UserClass name={"First"} location={"Pehowa (class)"}/>
                {/* <UserClass name={"Second"} location={"Pehowa (class)"}/> */}
            </div>
        )

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is my learning project</h2>
//             <User name={"Sarabjot (function)"}/>

//             <UserClass name={"Sarabjot (class)"} location={"Pehowa (class)"}/>
//         </div>

//     )
// }

export default About;