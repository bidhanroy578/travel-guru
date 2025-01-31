import { Link, useNavigate } from "react-router";
import Nav from "./components/nav/Nav";

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="md:p-5 md:px-8">
            <Nav></Nav>
            <h3 className="text-center">Page not found. <Link className="mx-3 text-[#e5a600]" onClick={() =>navigate(-1)}>Go to previous page...</Link> </h3>
        </div>
    );
};

export default Error;