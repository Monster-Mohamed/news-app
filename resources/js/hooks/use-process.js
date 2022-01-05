import {useEffect, useState} from "react";

/**
 * useProcess() hook -v2
 * @description this hook make processing for data and get Infinite Scroll Pagination for cards
 * @notice backend must send the data in [ message ] object not any name else
 * @new the hook doesn't need function to pass anymore
 * @param {string} URLNAME this is the API URL NAME
 * @returns {isLoading: boolean, values: *[]}
 */
const useProcess = (URLNAME) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [values, setValues] = useState([]);

    useEffect(() => {
        const getMore = () => {
            const body = document.querySelector("body");
            const position = body.scrollHeight;
            const scrolled = document.scrollingElement.scrollTop + 450;
            if (scrolled > position - 250 && !isFinished || currentPage === 1) {
                const processing = async () => {
                    setIsLoading(true);
                    const res = (await fetch(`/api/${URLNAME}?page=${currentPage}`));
                    const data = await res.json();
                    const allData = data.data;
                    const join = values.concat(allData);
                    setValues(join);
                    if (data.last_page === currentPage - 1) {
                        setIsFinished(true);
                        return setIsLoading(false);
                    }
                    setCurrentPage(currentPage + 1);
                    setIsLoading(false);
                };
                processing();
            }
        };

        !isLoading && window.addEventListener("scroll", getMore);

        currentPage === 1 && !isLoading && getMore();


        return () => {
            window.removeEventListener("scroll", getMore);
        };
    });

    return {values, isLoading};
};

export default useProcess;
