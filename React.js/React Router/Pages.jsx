import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-primary text-center">Home Page</h1>
            {/*
                <a href="/about">About</a> 
                it not recommeded as it sends new http request and reloads entire page   
            */}
            <Link className="btn btn-info" to="/about">About Page</Link>
        </div>
    )
}

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-primary text-center">About Page</h1>
            <Link className="btn btn-warning" to="/">Home Page</Link>
        </div>
    )
}

const NotFound = () =>{
    return (
        <div className="container mt-5">
            <h1 className="text-danger text-center">Page Not Found</h1>
        </div>
    )
}

export {Home, About, NotFound};
