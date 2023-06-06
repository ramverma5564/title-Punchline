import React from "react"
import boxesData from "./BoxesData"
import Box from "./Boxes"

export default function Rough(){
    const [squares, setSquares] = React.useState(boxesData)

    function toggle(id){
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on : !square.on} : square
            })
        })
    }
    const squareElements = squares.map(square =>(
        <Box 
        key={square.id}
        id = {square.id}
        on={square.on}
        toggle={toggle}
        />
    ))
    return(
        <main>
            {squareElements}
        </main>
    )
}