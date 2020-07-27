import React from 'react'
import FollowerCard from './FollowerCard'

const OtherCard = props => {
    return (
        <div>
            {props.followers.map(followers => {
                return <FollowerCard key={followers.id} followers={followers} />
            })}
        </div>
    )
};

export default OtherCard