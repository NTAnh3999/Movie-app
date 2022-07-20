import Container from "../Container";

const CardContainer = ({ children }) => {
    return (
        <Container>
            <div className="card-container">{children}</div>
        </Container>
    );
};

export default CardContainer;
