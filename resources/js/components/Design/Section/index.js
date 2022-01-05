import cl from "./Section.module.scss";

const Section = ({children}) => {
    return <div className={cl.section}>{children}</div>
}

export default Section
