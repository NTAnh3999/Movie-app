const CardContainer = ({ children, title }) => {
    return (
        <div className="card-container">
            <h3 className="section-title">{title}</h3>
            <div className="card-list">{children}</div>
        </div>
    );
};

export default CardContainer;
