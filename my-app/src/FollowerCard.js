import React from "react"

const FollowerCard = props => {
    return (
        <div>
            <h1>Followers</h1>
            <img src={props.followers.avatar_url} alt=""/>
            <p>Name: {props.followers.name}</p>
            <p>Login: {props.followers.login}</p>
        </div>
    )
};

export default FollowerCard