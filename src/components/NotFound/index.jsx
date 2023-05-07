import { Link } from "react-router-dom";
import Img404 from "../../assets/images/err-img.png";
import Button from "../Button";
const NotFound = ({ message }) => {
  return (
    <>
      <div className="not-found-container">
        <img src={Img404} alt="Error" />
        <div className="not-found-text">
          <span>{message}</span>
          <Link to="/">
            <Button className="btn--primary">Home Page</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
