import React, { useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import { SectionLink } from "react-scroll-section";

export default (props) => {
  const [openMenu, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!openMenu);
  };

  const mountMenu = () => {
    return props.itens.map((it, i) => {
      return (
        <SectionLink section={it.id} key={i}>
          {({ onClick, isSelected }) => (
            <Item
              onClick={onClick}
              selected={isSelected}
              title={it.title}
              className="nav-item"
            >
              {it.title}
            </Item>
          )}
        </SectionLink>
      );
    });
  };

  return (
    <Menu>
      {isMobile ? (
        <MobileMenu>
          <div className="navbar-brand">Menu </div>
          <button
            onClick={toggleMenu}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </MobileMenu>
      ) : (
        ""
      )}
      <CollapseMenu open={openMenu} id="collapsibleNavbar">
        <NavItens>{mountMenu()}</NavItens>
      </CollapseMenu>
    </Menu>
  );
};

const Menu = styled.nav.attrs({
  className: ["navbar", "navbar-expand-md", "navbar-dark"],
})`
  display: flex;
  flex: 1;
  padding: 0px 5px !important;
  /* justify-content: center; */
  background-color: #fe7d0a;
`;

const NavItens = styled.ul.attrs({
  className: "navbar-nav",
})`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 12px;
  margin: 1px 10px;
  color: #fff;
  font-family: "Hind", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-style: normal;
  text-decoration: none;
  line-height: 23.002px;

  :hover {
    background-color: #000;
    transition: 700ms;
  }
  &.active {
    background-color: #000;
  }
`;

const MobileMenu = styled.div.attrs({
  className: ["navbar", "navbar-expand-md", "navbar-dark"],
})`
  display: flex;
  flex: 1;
  border-bottom: thin solid #eee7;
  transition: all 0.5s ease-out;
  .navbar-brand {
    flex: 1;
  }
  .navbar-toggler:active {
    background-color: #e3710a;
  }
`;

const CollapseMenu = styled.div.attrs({
  className: ["collapse", "navbar-collapse", "show"],
})`
  display: flex;
  justify-content: center !important;
  &.show {
    transition: max-height 500ms ease-in-out;
    overflow: hidden;
    max-height: ${(props) => (!isMobile || props.open ? "300px" : 0)};
  }
`;
