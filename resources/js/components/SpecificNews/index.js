import {useParams} from "react-router-dom";
import Section from "../Design/Section";
import {useEffect, useState} from "react";
import cl from "./SpecificNews.module.scss";

const SpecificNews = () => {
    const {id} = useParams();
    const [speNews, setSpeNews] = useState({});
    const [canLoad, setCanLoad] = useState(true);
    useEffect(() => {
        if (canLoad) {
            const processing = async () => {
                setCanLoad(false);
                const res = (await fetch(`/api/news/${parseInt(id)}`));
                const data = await res.json();
                setSpeNews(data);
            };
            processing();
        }
    }, [canLoad, speNews]);
    const check = Object.entries(speNews);


    return (!canLoad && check.length !== 0 && <Section>
        <img className={cl.img} src={speNews.image} alt={speNews.title}/>
        <h2 className={cl.heading}>{speNews.title}</h2>
        <p className={cl.description}>{speNews.description}</p>
        <p className={cl.date}>{(speNews.created_at).slice(0, 10)}</p>
    </Section>);
};

export default SpecificNews;
