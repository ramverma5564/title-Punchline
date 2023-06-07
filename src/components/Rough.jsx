import React from "react"
import jokesData from "./JokesData"
import Joke from "./Jokes"

export default function Rough(){

    const jokeElement = jokesData.map(item => {
        return (
            <Joke
            key={item.id}
            title = {item.title}
            punchline = {item.punchline}
            />
        )
    })

    return(
        <main>
            {jokeElement}
        </main>
    )
}