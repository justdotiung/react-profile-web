import { Lecture } from "../../types/type";
import { Link } from "react-router-dom";

const LectureItem = ({
  id,
  imageUrl,
  description,
  title,
  keyword,
}: Lecture) => {
  return (
    <div>
      <Link to={`/lectures/${id}`}>
        <div>{title}</div>
        <div>{keyword}</div>
        <div>{description}</div>
        <div>{imageUrl}</div>
      </Link>
    </div>
  );
};

export default LectureItem;
