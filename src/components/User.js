import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    return <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={() => {
            setCount(count + 1);
        }}>Click</button>
        <h2>Name: {props.name}</h2>
        <h3>Location: Pehowa</h3>
        <h4>Email: sarabjot1609@gmail.com</h4>
    </div>
};

export default User;