import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PiPawPrint } from "react-icons/pi";

export const AuthList = styled.nav`
  display: flex;
  gap: 20px;
`;

export const LogInBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fef9f9;
  background-color: #ffc107;
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 40px;
  border: 1px;
`;
export const RegisterBtn = styled(NavLink)`
  font-size: 16px;
  font-family: Manrope;
  font-weight: 700;
  padding: 8px 20px;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 40px;
`;
export const PawIcon = styled(PiPawPrint)`
  fill: white;
  width: 24px;
  height: 21px;
  transform: rotate(30deg);
  margin-left: 8px;
`;
