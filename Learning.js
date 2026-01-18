import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search Bar
 * -  Reastaurant Container
 *   - Restaurant Card
 * 
 * Footer
 * - CopyWright
 * - Links
 * - Address
 * - Contact
 */

const heading = <h1 className="head" tabIndex="1">Namaste React using JSX</h1>

const Title = () => (
    <h1 className="head" tabIndex="1">Namaste React using JSX</h1>
);

const number = 10000;

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
       <h2>{number}</h2>
        <Title />
        <h1>Namaste React Functional Component</h1>
    </div>
    
);




// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);














// React.createElement => JS  Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"}, 
//     "Namaste React"
// );

// console.log(heading);

//JSX - javascript syntax(transpiled before it reaches the JS engine) - PARCEL - BABEL

//JSX =>React.createElement => ReactElement - JS object => HTMLElement(render)

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 *      <div id="child2">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

// const parent = React.createElement(
//     "div", 
//     {id: "parent"},
//     React.createElement("div", {id: "child"}, [
//         React.createElement("h1", {}, "I'm h1 tag"),  
//         React.createElement("h2", {}, "I'm h2 tag")
//     ]),
//     React.createElement("div", {id: "child2"}, [
//         React.createElement("h1", {}, "I'm h1 tag"),  
//         React.createElement("h2", {}, "I'm h2 tag")
//     ]) 
// );

// JSX

// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);