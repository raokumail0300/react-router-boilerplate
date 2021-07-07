import { Link,useHistory } from "react-router-dom";


const About = () => {
        
    const history = useHistory()

    function goto(){
           history.push("/")
    } 

    return(
        <div>
            <h1>About page</h1>
             <Link to="/">HOME</Link>  <br/>
             <Link to="/contact">CONTACT</Link>  <br/>
             <Link to="/about">ABOUT</Link>  <br/>
              <button onClick={goto} >Go to HOME</button> 



        </div>
    );
}

export default About;