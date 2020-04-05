import React from 'react'
import styled from "styled-components";
import Button from "./Button";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 30px;
  color: #fff;
  background-color: ${props => props.theme.main};
  text-align: center;
`

FooterContainer.defaultProps = {
  theme: {
    main: "#FF6766",
    mainLighter: "#FF6766"
  }
}

const Footer = () => {
  return (
      <FooterContainer>
        All rights reserved
      </FooterContainer>
  )
}


export default Footer