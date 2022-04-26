import LectureList from "../../components/lectures/index";
import { lectures } from "../../db/lecture";

const LecturePage = () => {
  return <LectureList lectures={lectures} />;
};

export default LecturePage;
