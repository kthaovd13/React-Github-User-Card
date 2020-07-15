import React from "react"

const UserCard = props => {
    return (
        <div>
            <img src={props.user.avatar_url} alt=""/>
            <p>Name: {props.user.name}</p>
            <p>Login: {props.user.login}</p>
            <p>Account Type: {props.user.type}</p>
            <p>Following: {props.user.following}</p>
        </div>
    )
};

export default UserCard