import {Column} from "../Design/Grid";
import Section from "../Design/Section";
import Card from "../Design/Card";
import useProcess from "../../hooks/use-process";
import Loading from "../Design/Loading/Loading";

const News = () => {
    const {values: news, isLoading} = useProcess("news");
    const allNews = news && !isLoading && news.map((el) => (
        <Card url={`/news/${el.id}`} key={el.id} title={el.title} description={el.description} date={el.created_at}
              image={el.image}/>
    ));
    return (
        <Section>
            <Column>
                {allNews}
            </Column>
            <Loading isLoading={isLoading}/>
        </Section>
    );
};


export default News;
