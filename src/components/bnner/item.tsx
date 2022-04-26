import { Lecture } from "../../types/type";

const Item = ({ title, imageUrl, keyword, description }: Lecture) => {
  return (
    <div>
      <div>{title}</div>
      <img src={`${imageUrl}`} />
      <div>{keyword}</div>
      <div>{description}</div>
    </div>
  );
};

export default Item;
