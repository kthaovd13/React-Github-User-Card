import React from "react"
import UserCard from "./UserCard"

const User = props => {
    return (
        <div>
            {props.user.map(user => {
                return <UserCard key={user.id} user={user} />
            })}
        </div>
    )
};

export default User