import React from "react";
import Container from "../Container";

import "./cardcontainer.scss";

const CardContainer = ({ children }) => {
    return (
        <Container>
            <div className="card-container">{children}</div>
        </Container>
    );
};

export default CardContainer;
