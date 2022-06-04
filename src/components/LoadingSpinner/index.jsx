import React from "react";
import Container from "../Container";
import loadingImg from "../../assets/Spin-1s-300px.gif";
import "./loadingspinner.scss";
const LoadingSpinner = () => {
    return (
        <Container>
            <div className="loading-spinner-container">
                <img src={loadingImg} alt="Loading spinner" />
            </div>
        </Container>
    );
};

export default LoadingSpinner;
