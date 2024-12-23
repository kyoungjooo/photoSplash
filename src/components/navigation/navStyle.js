import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  gap: 32px;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
`;
export const NavLable = styled(Link)`
  text-decoration: none;
  border-bottom: none;
`;
export const NavLabelText = styled.span`
  color: ${(props) => (props.isActive ? "blue" : "black")};
  &:hover {
    color: blue;
  }
`;
