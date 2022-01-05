import React from "react";

const Loading = ({isLoading = false}) => {
    return (
        isLoading && (
            <div className="loading" style={{display: !isLoading && "none"}}>
                <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg"
                     alt="loading more posts"/>
                <p>Loading...</p>
            </div>
        )
    );
};

export default Loading;
