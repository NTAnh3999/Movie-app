import { Link } from "react-router-dom";
const NotFound = ({ message }) => {
    return (
        <>
            <div className="not-found-container">
                {message}
                <div>
                    <Link to="/">Home Page</Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
