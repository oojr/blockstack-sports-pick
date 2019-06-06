/**
 *
 * TopMenu
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuLink from './MenuLink.jsx';

const TopMenuBar = styled.div`
  background-color: #20232a;
  background-image: linear-gradient(0deg, #54575e 0%, #484b54 50%);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
  padding-right: 60px;
  z-index: 1;
  width: 100%;
`;

const LeftSideMenu = styled.div`
  flex: auto;
`;

const RightSideText = styled.span`
  color: #fff;
  padding-right: 20px;
  font-size: 14px;
  margin-bottom: 2px;
`;

const MenuIcon = styled.div`
  padding-left: 2px;
  padding-right: 8px;
  position: relative;
  bottom: 1.5px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

const LogoutLink = styled.button``;

function NavigationBar({ fullName, profileImg, handleSignOut }) {
  return (
    <div>
      <TopMenuBar>
        <LeftSideMenu>
          <MenuLink activeNavLink>NBA</MenuLink>
          <MenuLink>NFL</MenuLink>
          <MenuLink>MLB</MenuLink>
          <MenuLink>NHL</MenuLink>
        </LeftSideMenu>

        {fullName && <RightSideText>{fullName}</RightSideText>}
        <ProfileImage src={profileImg} />
        <button
          className="btn btn-primary btn-lg"
          id="signout-button"
          onClick={handleSignOut.bind(this)}
        >
          Logout
        </button>
      </TopMenuBar>
    </div>
  );
}

NavigationBar.propTypes = {
  fullName: PropTypes.string,
  location: PropTypes.object
};

export default NavigationBar;
