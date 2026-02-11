import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <>
      <h2>Check out some cool profiles!</h2>
      <div className="link-list">
        <Link to="popeye">
          Popeye
        </Link>
        <Link to="spinach">
          Spinach
        </Link>
        <Link to="/" className="home">
          Back to Main Page
        </Link>
      </div>
    </>
  );
};

export default DefaultProfile;