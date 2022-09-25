const CardContainer = ({ children, title }) => {
    return (
        <section className="card-container">
            <h3 className="section-title">{title}</h3>
            <div className="card-list">{children}</div>
        </section>
    );
};

export default CardContainer;
