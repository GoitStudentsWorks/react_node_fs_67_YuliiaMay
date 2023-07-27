import PropTypes from "prop-types";

import { ModalComponents } from "../ModalComponents/ModalComponents";

import {
  WrapperModal,
  CloseIcon,
  Title,
  WrapperBtn,
  CancelBtn,
  LogoutBtn,
} from "./ModalApproveAction.styled";
import { Icon } from "../../Icon/Icon";

const ModalApproveAction = ({ active, setShow }) => {
  const handleClickClose = () => {
    setShow(false);
  };
  return (
    <>
      <ModalComponents onClose={setShow} active={active}>
        <WrapperModal>
          <CloseIcon onClick={handleClickClose}>
            <Icon
              iconName={"icon-cross"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
              fill={"#54ADFF"}
            />
          </CloseIcon>
          <Title>Already leaving?</Title>
          <WrapperBtn>
            <CancelBtn onClick={handleClickClose} type="button">
              Cancel
            </CancelBtn>
            <LogoutBtn type="button">
              Yes
              <Icon
                iconName={"icon-logout"}
                width={"24px"}
                height={"24px"}
                stroke={"#ffffff"}
                fill={"#ffffff"}
              />
            </LogoutBtn>
          </WrapperBtn>
        </WrapperModal>
      </ModalComponents>
    </>
  );
};

export default ModalApproveAction;

ModalApproveAction.propTypes = {
  active: PropTypes.bool,
  setShow: PropTypes.func,
};
