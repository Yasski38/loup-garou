import React from 'react'
import styled from "styled-components";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons'

const HeaderContainer = styled.header`
  width: 100%;
  padding: 30px;
  color: #fff;
  background-color: ${props => props.theme.main};
`
HeaderContainer.defaultProps = {
  theme: {
    main: "#FF6766",
    mainLighter: "#FF6766"
  }
}

const Header = () => {
  return (
      <HeaderContainer>
        <FontAwesomeIcon icon={ faWolfPackBattalion } /> Loup Garou de Yasski
      </HeaderContainer>
  )
}


export default Header