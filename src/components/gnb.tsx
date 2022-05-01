import { Link } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const List = () => {
  return (
    <div className="list__wrapper">
      <div className="menu__list">
        <div className="menu__list item">
          <Link className="gnb__container--link" to="/profile">
            프로필
          </Link>
        </div>
        <div className="menu__list item">
          <Link className="gnb__container--link" to="/s">
            강의문의
          </Link>
        </div>
        <div className="menu__list item">
          <Link className="gnb__container--link" to="/lectures">
            강의보러가기
          </Link>
        </div>
        <div className="menu__list item">
          <a
            className="gnb__container--link"
            href="https://naver.com"
            target="_blank"
          >
            카페가기
          </a>
        </div>
      </div>
    </div>
  );
};

const Gnb = () => {
  const [menuChecked, setMenuChecked] = useState(false);

  const handleClickMenu = () => {
    setMenuChecked(!menuChecked);
  };

  return (
    <div className="gnb__bar">
      <div className="gnb__container">
        <Link className="gnb__container--link" to="/">
          <span className="gnb__container--logo">OSM</span>
        </Link>
        <div className="gnb__container--menu">
          <div className="gnb__container--menu item">
            <Link className="gnb__container--link" to="/profile">
              프로필
            </Link>
          </div>
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
