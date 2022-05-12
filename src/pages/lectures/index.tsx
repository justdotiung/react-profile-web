import LectureList from "../../components/lecture";
import { lectures } from "../../db/lecture";

const LecturePage = () => {
  return (
    <div className="lecture__container">
      <LectureList lectures={lectures} />
    </div>
  );
};

export default LecturePage;
