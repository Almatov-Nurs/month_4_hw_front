import React from 'react';

function UsersList(props) {
    return (
        <ul>
            {
                props.usersList.length > 0
                    ?
                    props.usersList.map(user => <li key={user.id} style={{marginBottom: "15px"}}>
                        <div>
                            name:{user.name}
                        </div>
                        <div>
                            email: {user.email}
                        </div>
                        <div>
                            <button>show user info</button>
                        </div>
                    </li>)
                    :
                    <li>Нет пользователей</li>
            }
        </ul>
    );
}

export default UsersList;