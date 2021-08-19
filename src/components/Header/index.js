import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [state, setState] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  });

  const handleScroll = () => {
    const { prevScrollpos } = state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
    console.log(state);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return state.visible ? (
    <NavContainer>
      <Title>Bazaar</Title>
      <List>
        <Category>Women</Category>
        <Category>Men</Category>
        <Category>Children</Category>
        <Category>Decor</Category>
        <Category>What's New</Category>
      </List>
    </NavContainer>
  ) : (
    <NavContainerHidden>
      <Title>Bazaar</Title>
      <List>
        <Category>Women</Category>
        <Category>Men</Category>
        <Category>Children</Category>
        <Category>Decor</Category>
        <Category>What's New</Category>
      </List>
    </NavContainerHidden>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 5vw;
  background-image: linear-gradient(gray, transparent);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :hover {
    background-color: #1a1a1a;
    background-image: none;
    color: white;
  }
  transition: top 0.6s;
`;

const NavContainerHidden = styled(NavContainer)`
  top: -100px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  margin-top: 60px;
`;

const Category = styled.li`
  list-style: none;
  font-size: 1.2em;
  margin: -20px 10px 30px 10px;
`;
export default Header;
