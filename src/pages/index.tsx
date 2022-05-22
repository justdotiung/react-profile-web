import Banner from "../components/bnner";
import Portfolio from "../components/portfolio/portfolio";
import Profile from "../components/profile";
import { certificate, career } from "../db/lecture";

const MainPage = () => {
  return (
    <>
      <Profile />
      <Portfolio infos={certificate} career={career} />
      <Banner />
    </>
  );
};

export default MainPage;
