import React from 'react';

class UserRepos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reposCount: this.props.repos.length
        }
    }
    componentWillReceiveProps(props) {
        this.setState({reposCount: props.repos.length})
    }
    render() {
        const { repos } = this.props;
        const reposList = repos.map(function(repo, key){
            return(
                <div key={key} className="card mb-2">
                    <div className="card-header">
                        <h3>{repo.name}
                            <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <p>{repo.description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                        <a href={repo.html_url + '/issues'} className="btn btn-link" role="button">Issues ({repo.open_issues}) </a>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <h2>{this.state.reposCount} Repositories</h2>
                {reposList}
            </div>
        )
    }
};

export default UserRepos;
