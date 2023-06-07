import React from "react";

export default function Joke(props){
    const [show,setShow] = React.useState(true)

    function toggle(){
        setShow(prevState => !prevState)
    }
    return (
        <div>
            <h1>{props.title}</h1>
            {show && <p>{props.punchline}</p>}
            <button onClick={toggle}>{show ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}