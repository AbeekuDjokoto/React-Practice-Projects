import PropTypes from "prop-types";
import { StarIcon } from "../../assets/icons/icons";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star, index) => (
        <div key={index} className={`${rating >= star ? "text-red-800" : ""}`}>
          <StarIcon />
        </div>
      ))}
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};
