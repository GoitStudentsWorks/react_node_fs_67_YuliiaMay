import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Button,
  Div,
  Div1,
  Div2,
  Img,
  Info,
  PP,
  Ul,
  Li,
  Span,
} from "./CommonItemList.styled";
import PropTypes from "prop-types";

import { Icon } from "../../../components/Icon/Icon";
import { Div3, P1 } from "../NoticesCategoriesList/NoticesPetCard.styled";

import { formatYears } from "../../../utils";
import { useState } from "react";

export const CommonItemList = ({ item, children }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleClickDelete = () => {
    setShowModalDelete(true);
  };

  const handleAttentionMsg = () => {
    setShowModalDelete(true);
  };
  const formattingOverview = (text) => {
    let newFormat = text;
    if (newFormat.length > 15) {
      newFormat = text.slice(0, 21) + "...";
    }
    return newFormat;
  };

import {
  formatYears,
  formattingCitName,
  formattingAge,
  formattingTitle,
  checkPoster,
} from "../../../utils";

import { selectUser } from "../../../redux/authSlice/selectors";


export const CommonItemList = ({ item, children, handleClickDelete }) => {
  const user = useSelector(selectUser);

  const [isFollowing, setIsFollowing] = useState(false);

  const handleClickDeleteTest = (id) => {
    handleClickDelete(id);
  };

  useEffect(() => {
    if (user._id === item.owner) {
      setIsFollowing(true);
      return;
    }
  }, [item.owner, user]);

  return (
    <Info>
      <Div>
        <Img src={checkPoster(item.imgUrl)} alt="pet" loading="lazy"></Img>
        <Div1>
          <PP>{item.category}</PP>
          <Div2>
            <Button aria-label="add to favorites" onClick={handleAttentionMsg}>
              <Icon
                iconName={"icon-heart"}
                width={"24px"}
                height={"24px"}
                stroke={"#54ADFF"}
              />
            </Button>

            {isFollowing ? (
              <Button
                aria-label="add to trash"
                onClick={() => handleClickDeleteTest(item._id)}
              >
                <Icon
                  iconName={"icon-trash"}
                  width={"24px"}
                  height={"24px"}
                  stroke={"#54ADFF"}
                />
              </Button>
            ) : (
              ""
            )}
          </Div2>
        </Div1>
        <Ul>
          <Li>
            <Icon
              iconName={"icon-location"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span> {item.place}</Span>
          </Li>
          <Li>
            <Icon
              iconName={"icon-clock"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{formattingAge(formatYears(item.birthday) + " year")}</Span>
          </Li>
          <Li>
            <Icon
              iconName={item.sex === "female" ? "icon-female" : "icon-male"}
              width={"24px"}
              height={"24px"}
              stroke={"#54ADFF"}
            ></Icon>
            <Span>{item.sex}</Span>
          </Li>
        </Ul>
      </Div>
      <Div3>
        <P1>{item.title}</P1>
        {children}
      </Div3>
    </Info>
  );
};

CommonItemList.propTypes = {
  item: PropTypes.object,
  children: PropTypes.object,
  handleClickDelete: PropTypes.func,
};
