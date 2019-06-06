import React, { Component } from 'react';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="panel-landing" id="section-1">
            <h1 className="landing-heading">
              Predict sports with no money wager
            </h1>
            <h1 className="landing-heading">Timestamped with Blockchain</h1>
            <p className="lead">
              <button
                className="btn btn-primary btn-lg"
                id="signin-button"
                onClick={handleSignIn.bind(this)}
              >
                Sign In with Blockstack
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
