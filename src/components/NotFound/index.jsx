import React from "react";
import "./notfound.scss";
import Container from "../Container";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <Container>
            <div className="not-found-container">
                Page not found
                <div>
                    <Link to="/">Home Page</Link>
                </div>
            </div>
        </Container>
    );
};

export default NotFound;
