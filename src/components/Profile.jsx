import React, { Component } from 'react';
import { Person } from 'blockstack';
import NavigationBar from './NavigationBar.jsx';
import Game from './Game.jsx';
import { PICKS_FILENAME } from './constants';

const avatarFallbackImage =
  'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name() {
          return 'Anonymous';
        },
        avatarUrl() {
          return avatarFallbackImage;
        }
      }
    };
  }

  componentDidMount() {
    const options = { decrypt: true };
    this.props.userSession.getFile(PICKS_FILENAME, options).then(content => {
      if (content) {
        console.log(content);
        const userPicks = JSON.parse(content);
        this.setState({ userPicks });
      } else {
        const userPicks = null;

        this.setState({ userPicks });
      }
    });
  }

  handleSave(picks) {
    const options = { encrypt: true };
    this.props.userSession
      .putFile(PICKS_FILENAME, JSON.stringify(picks), options)
      .finally(() => {
        this.setState({ savingPicks: false });
      });
  }

  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    const headingName = person.name() ? person.name() : 'Nameless Person';
    const headingText = `Hello ${headingName}`;
    const profileImg = person.avatarUrl()
      ? person.avatarUrl()
      : avatarFallbackImage;
    return !userSession.isSignInPending() ? (
      <div className="panel-welcome" id="section-2">
        <NavigationBar
          fullName={headingText}
          profileImg={profileImg}
          handleSignOut={handleSignOut}
        />
        <h1>Next Game</h1>
        <h3>Warrior are the favorite by 4.5 points</h3>
        <Game handleSave={this.handleSave.bind(this)} />

        <h1>Your Picks</h1>
        {!this.state.userPicks && <span> No Picks Made Yet</span>}
        {this.state.userPicks && <span>{this.state.userPicks}</span>}
      </div>
    ) : null;
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile)
    });
  }
}
