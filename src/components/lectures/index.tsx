import { Lecture } from "../../types/type";
import LectureItem from "./item";

const LectureList = ({ lectures }: { lectures: Lecture[] }) => {
  return (
    <ul>
      {lectures &&
        lectures.map((data) => <LectureItem key={data.id} {...data} />)}
    </ul>
  );
};

export default LectureList;
