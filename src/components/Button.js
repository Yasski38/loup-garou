import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: #FF6766; 
  line-height: 50px;
	height: 50px;
	text-align: center;
	width: 250px;
	cursor: pointer;
	color: #FFF;
	font-family:Montserrat;
	transition: all 0.5s;
	position: relative;
	color: #FFF;
	transition: all 0.5s;
	position: relative;
  border-radius:25px;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
  margin:1em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`


// (props) => {
//   const { onClick, children } = props;
//   return (<button onClick={onClick}> { children }</button>);
// }




export default Button;
