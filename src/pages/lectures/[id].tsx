import { useParams } from "react-router-dom";

const LectureDetailPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default LectureDetailPage;
