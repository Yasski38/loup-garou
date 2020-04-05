import React from 'react'
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Body = styled.section`
  width: 100%;
  background-color: #f4fefe;
  box-sizing: border-box;
  padding: 30px;
  
  article {
    background-color: #f4fefe;
    padding: 20px;
  }
`;

const Layout = props => {
  return (
      <div>
        <Header/>
        <Body>
          <article>
            {props.children}
          </article>
        </Body>
        <Footer/>
      </div>
  );
};


export default Layout;