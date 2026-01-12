import { FaStarHalfAlt, FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ value, text, color }) => {
  let ratingInStar = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      ratingInStar.push(<FaStar key={i} />);
    } else if (value >= i - 0.5) {
      ratingInStar.push(<FaStarHalfAlt key={i} />);
    } else {
      ratingInStar.push(<FaRegStar key={i} />);
    }
  }

  return (
    <div className="rating">
      <span>{ratingInStar}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

export default Rating;
