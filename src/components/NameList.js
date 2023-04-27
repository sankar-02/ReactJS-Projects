import React from 'react'
import Person from './Person'

function NameList() {
    const personList = [
        {
            id: 1,
            name: "Alan",
            age: 29,
            skill: "singer"
        },
        {
            id: 2,
            name: "John",
            age: 49,
            skill: "actor"
        },
        {
            id: 3,
            name: "Linus",
            age: 35,
            skill: "youtuber"
        }
    ]
    const personDetails = personList.map( (person) => (
        <Person person= {person} />
    ))
    return(<div> {personDetails} </div>)
}

export default NameList