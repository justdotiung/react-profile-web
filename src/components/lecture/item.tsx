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
    <div className="lecture__item__container">
      <Link to={`/lectures/${id}`}>
        <div>{title}</div>
        <div>{keyword}</div>
        <div>{description}</div>
        <img className="lecture__item__image" src={imageUrl} alt={imageUrl} />
      </Link>
    </div>
  );
};

export default LectureItem;
