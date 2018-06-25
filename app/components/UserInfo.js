import React from 'react';

import UserRepos from './UserRepos';

const UserInfo = ({ user, repos }) => {
    const userInfo = user ? 
    (
        <div className="row">
            <div className="col-lg-4">
                <div className="card">
                    <img className="card-img-top" src={user.avatar_url} alt="avatar" />
                    <div className="card-body">
                        
                        <h2>{user.login}</h2>
                        <p>{user.name}</p>
                        <p>Followers: {user.followers} / Following: {user.following}</p>
                        <p>
                            <a className="btn btn-primary" href={user.html_url} role="button">View details</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <UserRepos repos={repos} />
            </div>
        </div>
    ) : null;
    return userInfo;
}

export default UserInfo;