import cl from "./Card.module.scss";
import {Row} from "../Grid";
import Button from "../Button";

const Card = ({url, title, description, date, image}) => {
    return (
        <div className={cl.card}>
            <img
                src={image}
                alt={title}
                className={cl.img}
            />
            <h2 className={cl.title}>{title}</h2>
            <Row js="space-between">
                <p className={cl.description}>{description.slice(0, 35)}...</p>
                <p className={cl.date}>{date.slice(0, 7)}</p>
            </Row>
            <Button url={url} words="SHOW DETAILS"/>
        </div>
    );
};

export default Card;
