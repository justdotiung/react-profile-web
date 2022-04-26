import { Link } from "react-router-dom";
const Gnb = () => {
  return (
    <>
      <Link to="/">홈</Link>
      <Link to="/profile"> 프로필 </Link>
      <Link to="/s"> 강의문의 </Link>
      <Link to="/lectures">강의보러가기</Link>
      <a href="https://naver.com" target="_blank">
        카페가기
      </a>
    </>
  );
};

export default Gnb;
