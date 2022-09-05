import React from 'react';
import {useState} from "react";

function FormPage(props) {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const changeInput = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        )
    }

    const addUser = (e) => {
        for (let i in user) {
            if (user[i] === "") {
                alert(`поле ${i} пустое`)
            } else if (user[i].trim() === "") {
                alert(`поле ${i} пустое`)
            } else if (user.name !== "" && user.username !== "" && user.email !== "") {
                e.preventDefault()
                fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(r => r.json()).then(data => console.log(data))
            }
        }
    }


    return (
        <form onSubmit={addUser}>
            <input
                type="text"
                placeholder="name"
                name="name"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="username"
                name="username"
                onChange={changeInput}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={changeInput}
            />
            <button type="submit" onClick={addUser}>add user</button>
        </form>
    )
        ;
}

export default FormPage;