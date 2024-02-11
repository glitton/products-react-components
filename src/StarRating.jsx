import { Star } from "react-feather";
import { range } from "./utils";

const StarRating = ({ rating }) => {
  return (
    <div className='star-rating'>
      {range(5).map((num) => {
        const className = rating > num ? "star filled" : "star hollow";
        return <Star className={className} key={num} />;
      })}
    </div>
  );
};
export default StarRating;
