import { Infos, Info } from "../../db/lecture";

const Portfolio = ({ infos, career }: { infos: Infos; career: Info }) => {
  return (
    <div className="portfolio__wrapper">
      <div className="portfolio__container">
        <div className="image__container">
          <img src="/assets/profile__ws.jpg" alt="" />
        </div>
        <div className="image__container">
          <img src="/assets/profile__ws.jpg" alt="" />
        </div>
        <div className="info__container"></div>
        <div className="info__container"></div>
        <div className="info__container"></div>
        <div className="info__container"></div>

        <div>경력</div>
        <div>자격 및 이수</div>
      </div>
    </div>
  );
};

export default Portfolio;
