/** @format */

import styled from "styled-components";

export const PetImg = styled.img`
  height: 240px;
  width: 240px;
  border-radius: 20px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    width: 161px;
    height: 161px;
  }
`;

export const PetInfoCard = styled.div`
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  width: 240px;
  background-color: ${(props) => props.theme.background.wight};
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  text-align: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    position: relative;
    width: 664px;
    height: 216px;
    display: flex;

    padding: 20px;
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    width: 781px;
    height: 172px;
    gap: 24px;
  }
`;

export const PetInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    margin-top: 0px;
  }
`;

export const PetInfoPart = styled.div`
  display: flex;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    position: static;
  }
`;

export const PetInfoTextName = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.56px;
`;

export const PetInfoDescription = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.56px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
  top: -3px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    right: 0;
    top: -3px;
  }
`;

export const UserPetsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.sizes.tab}) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: ${(props) => props.theme.sizes.desk}) {
    gap: 24px;
  }
`;
