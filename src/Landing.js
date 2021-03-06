import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";

function handleCreateGame(history) {
  const random = (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  ).substr(0, 5);
  history.push(`/g/${random}`);
}

const Landing = ({ title }) => {
  const history = useHistory();
  const joinGameInputRef = useRef(null);
  return (
    <LandingWrapper>
      <GlobalStyle />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading>
        <HeadingText>Cards of</HeadingText>{" "}
        <Personality><LetterP>P</LetterP>ersonalit<LetterY>y</LetterY></Personality>
      </Heading>
      <Form
        onSubmit={() => history.push(`/g/${joinGameInputRef.current.value}`)}
      >
        <JoinGameLabel htmlFor="joingame">ENTER GAME CODE</JoinGameLabel>
        <JoinGameInput
          ref={joinGameInputRef}
          id="joingame"
          minLength="5"
          maxLength="5"
          text="text"
        />
        <JoinGameButton type="submit">Join Game</JoinGameButton>
      </Form>
      <OrTextWrap>
        <OrText>OR</OrText>
      </OrTextWrap>
      <Button onClick={() => handleCreateGame(history)}>Create Game</Button>
      {/* <AltButton onClick={() => history.push('/create-deck')}>Create Deck</AltButton>
      <AltButton onClick={() => history.push('/edit-deck')}>Edit Deck</AltButton> */}
    </LandingWrapper>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
  }
  button,
  input {
    appearance: none;
    border: 0;
  }
`;
const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  background-color: #000;
`;
const Heading = styled.h1`
  position: relative;
  margin: 0 0 1rem;
  padding: 0 1rem;
  font-size: 4em;

  @media (min-width: 501px) {
    font-size: 7em;
  }
`;
const Personality = styled.span`
  background: linear-gradient(
    to right,
    rgb(64, 224, 208),
    rgb(255, 140, 0),
    rgb(255, 0, 128)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  letter-spacing: -1.2px;
  text-shadow: 1px 1px 1xp rgba(0, 0, 0, 0);
`;
const HeadingText = styled.span`
  position: absolute;
  top: -0.05em;
  left: 2.3em;
  text-transform: uppercase;
  font-size: 0.37em;
  letter-spacing: 0.1em;
  font-weight: normal;
  color: #fff;
`;

const Button = styled.button`
  display: block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0;
  font-weight: bold;
  transition: opacity .25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;
const LetterP = styled.span`
  margin-right: -.04em;
`;
const LetterY = styled.span`
  margin-left: .02em;
`;
const JoinGameButton = styled.button`
  display: block;
  appearance: none;
  background: #2cce9f;
  color: #000;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0;
  font-weight: bold;
  transition: opacity .25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;
const AltButton = styled.button`
  display: block;
  appearance: none;
  background: #000;
  color: #2cce9f;
  font-size: 1em;
  border: 0;
  padding: 0.7em 1em;
  border-radius: 8px;
  margin: 1em 0;
  font-weight: bold;
  transition: opacity .25s;

  &:hover,
  &:focus,
  &:disabled {
    opacity: 0.5;
    outline: 0;
  }
`;
const OrTextWrap = styled.p`
  position: relative;
  font-style: italic;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 1px solid #fff;
    width: 70px;
    height: 1px;
  }
`;

const OrText = styled.span`
  position: relative;
  background: #000;
  padding: 0 0.5em;
`;

const JoinGameInput = styled.input`
  appearance: none;
  border-radius: 8px;
  padding: 0.5em 0.5em;
  border: 2px solid transparent;
  text-align: center;

  &:focus {
    outline: 0;
    border-color: #2cce9f;
  }
`;
const JoinGameLabel = styled.label`
  display: block;
  text-align: left;
  text-transform: uppercase;
  font-size: 0.813em;
  color: #fff;
  margin-bottom: 0.5em;
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Landing;
