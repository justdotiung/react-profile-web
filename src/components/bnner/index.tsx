import Item from "./item";
import { lectures } from "../../db/lecture";

const Banner = () => {
  return (
    <div>
      {lectures && lectures.map((data) => <Item key={data.id} {...data} />)}
    </div>
  );
};

export default Banner;
