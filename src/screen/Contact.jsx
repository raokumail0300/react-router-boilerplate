import { Link } from "react-router-dom";







const Contact = () => {
    return(
        <div>
            <h1>Contact page</h1>
            <Link to="/">HOME</Link><br/>
            <Link to="/contact">CONTACT</Link><br/>
            <Link to="/about">ABOUT</Link><br/>
        </div>
    );
}

export default Contact;