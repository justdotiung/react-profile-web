import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";

const List = () => {
  return (
    <div className="list__wrapper">
      <div className="menu__list">
        <Link className="gnb__container--link" to="/profile">
          <div className="menu__list item">프로필</div>
        </Link>
        <Link className="gnb__container--link" to="/s">
          <div className="menu__list item">강의문의</div>
        </Link>
        <Link className="gnb__container--link" to="/lectures">
          <div className="menu__list item">강의보러가기</div>
        </Link>
        <a
          className="gnb__container--link"
          href="https://naver.com"
          target="_blank"
        >
          <div className="menu__list item">카페가기</div>
        </a>
      </div>
    </div>
  );
};

const Gnb = ({
  menuToggle,
  menuChecked,
}: {
  menuToggle: Dispatch<SetStateAction<boolean>>;
  menuChecked: boolean;
}) => {
  const handleClickMenu = (e: SyntheticEvent) => {
    e.stopPropagation();
    console.log(menuChecked);
    menuToggle(!menuChecked);
  };

  return (
    <div className="gnb__bar">
      <div className="gnb__container">
        <Link className="gnb__container--link" to="/">
          <span className="gnb__container--logo">OSM</span>
        </Link>
        <div className="gnb__container--menu">
          <Link className="gnb__container--link" to="/profile">
            <div className="gnb__container--menu item">프로필</div>
          </Link>
          <div className="gnb__container--menu item">
            <Link className="gnb__container--link" to="/s">
              강의문의
            </Link>
          </div>
          <div className="gnb__container--menu item">
            <Link className="gnb__container--link" to="/lectures">
              강의보러가기
            </Link>
          </div>
          <div className="gnb__container--menu item">
            <a
              className="gnb__container--link"
              href="https://naver.com"
              target="_blank"
            >
              카페가기
            </a>
          </div>
        </div>
        <div className="gnb__container--icon" onClick={handleClickMenu}>
          {menuChecked ? (
            <CloseIcon className="item" />
          ) : (
            <ListIcon className="item" />
          )}
        </div>
      </div>
      {menuChecked && <List />}
    </div>
  );
};

export default Gnb;
