import loadingImg from "../../assets/Spin-1s-300px.gif";
const LoadingSpinner = () => {
    return (
        <>
            <div className="loading-spinner-container">
                <img src={loadingImg} alt="Loading spinner" />
            </div>
        </>
    );
};

export default LoadingSpinner;
