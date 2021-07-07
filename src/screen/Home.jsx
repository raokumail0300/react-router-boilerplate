import { Link } from "react-router-dom";



const Home = () => {
    return(
        <div>
            <h1>Home page</h1>
            <Link to="/">HOME</Link> <br/>
            <Link to="/contact">CONTACT</Link> <br/>
            <Link to="/about">ABOUT</Link> <br/>

        </div>
    );
}

export default Home;