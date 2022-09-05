import React, {useState} from 'react';

function UsersPage() {
    const [user, setUser] = useState({
        name: "",
        email: "",
    })

    const changeInput = (e) => {
        setUser({[e.target.name]: e.target.value})
    };

    const addUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(r => r.json()).then(data => console.log(data))
    };

    return (
        <div>
            <input type="text" placeholder="name" name="name" onChange={changeInput}/>
            <input type="text" placeholder="email" name="email" onChange={changeInput}/>
            <button onClick={addUser}>add user</button>
        </div>
    );
}

export default UsersPage;