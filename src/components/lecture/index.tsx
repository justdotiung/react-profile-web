import LectureItem from "./item";
import { Lecture } from "../../types/type";

const LectureList = ({ lectures }: { lectures: Lecture[] }) => {
  return (
    <ul className="lecture__list">
      {lectures &&
        lectures.map((data) => <LectureItem key={data.id} {...data} />)}
    </ul>
  );
};

export default LectureList;
