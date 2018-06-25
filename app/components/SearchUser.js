import React from 'react';

import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component {
    constructor(props) {
        super(props);
        this.userNameInputRef;
    }
    handleSubmit(e) {
        e.preventDefault();
        
        GitHubUser.getByUsername(this.userNameInputRef.value).then((response) => {
            this.props.updateUser(response.data);
        });
        GitHubUser.getReposByUsername(this.userNameInputRef.value).then((response) => {
            this.props.updateRepos(response.data);
        });
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>Search Profile on GitHub</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                ref={(el) => {this.userNameInputRef = el;}}
                                className="form-control"
                                placeholder="Ex: dougvil"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
};

export default SearchUser;

