import React, {useEffect, useState} from 'react';

function UsersList(props) {
    const [users, setUsers] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [update])

    const updateFunc = () => {
        setUpdate(!update)
    }

    return (
        <div>
            <button onClick={updateFunc}>обновить</button>
            <h1>users</h1>
            <ul>
                {users.map(user=> <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default UsersList;