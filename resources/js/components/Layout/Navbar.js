import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import {Fragment} from "react";

const NavbarComponent = () => {
    const hamburger = (eo) => {
        eo.preventDefault();
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        // open navbar
        navLinks.classList.toggle("open");
        // for make the show of links is good
        let i = 2;
        links.forEach((link) => {
            link.style.transition = `all 0.5s ease 0.${i}s`;
            link.classList.toggle("fade");
            i = i + 2;
        });

    };
    return (<nav>
        <div onClick={hamburger} className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <ul className="logo">
            <li>
                <Link to="/">Monster News</Link>
            </li>
        </ul>
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Add News</Link>
            </li>
        </ul>
    </nav>);
};

const Navbar = () => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<NavbarComponent/>, document.getElementById("header"))}
        </Fragment>
    );
};

export default Navbar;
