import styled, { css } from 'styled-components'

const activeFocusStyles = css`
  &:active,
  &:focus {
    transform: translateY(-.3rem);
    box-shadow: 0 .5rem 1rem rgba(0,0,0, .3);
  }
`

const hoverStyles = css`
  transform: translateY(-.5rem);
  box-shadow: 0 1rem 2rem rgba(0,0,0, .3);
`

const buttonStyles = css`
 background-color: #000;
 color: #fff;
 border: 1px solid #000;

 &:hover {
    ${hoverStyles};
    background-color: #fff;
    color: #000;
  }

  ${activeFocusStyles}
`

const invertedButtonStyles = css`
  width: 80%;
  opacity: .7;
  position: absolute;
  top: 255px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-color: #000;
  color: #fff;
  border: 1px solid #000;

  &:hover {
    ${hoverStyles}
    background-color: #fff;
    color: #000;
  }

  ${activeFocusStyles}
`

const googleSignInStyles = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: #fff;

  &:hover {
    ${hoverStyles}
    background-color: #fff;
    color: #3062b3;
  }

  ${activeFocusStyles}
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all .4s;

  ${getButtonStyles}
`
