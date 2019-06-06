import React, { Component } from 'react';
import styled from 'styled-components';
import raptorImg from './raptors.png';

const GameCard = styled.div`
  display: flex;
  justify-content: center;
`;

const PickButton = styled.button`
  background: 20232a;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  color: palevioletred;
  margin: 0 1em;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 0.25em 1em;
`;

const ButtonWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Team = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

export default function Game({ handleSave }) {
  return (
    <GameCard>
      <Team>
        Raptors
        <ButtonWrapper>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={() => handleSave('Raptors')}
          >
            Raptors
          </button>
        </ButtonWrapper>
        <ButtonWrapper>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={() => handleSave('Raptors +4.5')}
          >
            Raptors +4.5
          </button>
        </ButtonWrapper>
      </Team>
      <Team>
        Warriors
        <ButtonWrapper>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={() => handleSave('Warriors')}
          >
            Warriors
          </button>
        </ButtonWrapper>
        <ButtonWrapper>
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={() => handleSave('Warriors +4.5')}
          >
            Warriors -4.5
          </button>
        </ButtonWrapper>
      </Team>
    </GameCard>
  );
}
