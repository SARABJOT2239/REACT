# REACT practice

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithms - written in c++
- Caching - FAster Builds
- Image OPtimization
- Minification
- Bundling
- Compressing
- Consistent HAshing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- Https
- Tree Shaking - remove unused code





/**
 * Header
 * - Logo
 * - Nav Items
 * 
 * Body
 * - Search Bar
 * -  Reastaurant Container
 *   - Restaurant Card
 *      - Img
 *      - NAme of res, Star rating, 
 * 
 * Footer
 * - CopyWright
 * - Links
 * - Address
 * - Contact
 */


 - Two types of import and export;

 - 1. default import / export
    
    - export default Component;
    - import Component from "path";

- 1. named import / export
    
    - export const Component;
    - import { Component } from "path";


# React Hooks
- normal JS utility functions
- Main hooks
   - useState() - superpowerful state variable in react
   - useEffect() - 


# REACT LIFECYCLE (Component Lifecycle)  VERY IMPORTANT

------MOUNTING------
- Constructor(Default state or default data or shimmer UI)
- Render(Default) <HTML Default>
- ComponentDidMount 
   <Api call>
   <this.setState>

------Update------
- Render(Api data) <HTML Api data>
- ComponentDidUpdate


# Important Note:
- UseEffect is not equivalent to componentDidMount 

- Key Difference (Summary)
   - In function-based components, useEffect without a dependency array runs on every render.

   - In class-based components, componentDidMount() runs only once, and componentDidUpdate() handles subsequent renders separately.

----Another Case - with some dependencies in dependency array----
- Function Based
    useEffect(() => {
        console.log("useEffect triggered because count or count2 changed");
        // perform side effect here
    }, [count, count2]); // dependencies

- Class Based
    componentDidUpdate(prevProps, prevState) {
        if (
        prevState.count !== this.state.count ||
        prevState.count2 !== this.state.count2
        ) {
        console.log(
            "componentDidUpdate triggered because count or count2 changed"
        );
        // perform side effect here
        }
    }

# Key Difference (Conceptually)

   - In function-based components, dependency tracking is automatic via the dependency array.

   - In class-based components, dependency tracking is manual, requiring comparisons using prevState or prevProps.

   - This makes useEffect cleaner, shorter, and less error-prone compared to componentDidUpdate.


# ComponentWillUnmount
   - ⏱️ Timers clear karna (setInterval, setTimeout)

   - 🎧 Event listeners remove karna

   - 🌐 API subscriptions cancel karna

   - 🔁 WebSocket close karna

   - 🧹 Memory leak se bachana

- Class-Based Example
    class Timer extends React.Component {
    componentDidMount() {
        this.timer = setInterval(() => {
        console.log("Timer running");
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Cleanup done");
    }

    render() {
        return <h1>Timer Component</h1>;
    }
    }

- Same kaam useEffect me (Function Component)
    useEffect(() => {
    const timer = setInterval(() => {
        console.log("Timer running");
    }, 1000);

    return () => {
        clearInterval(timer);
        console.log("Cleanup done");
    };
    }, []);

    

 