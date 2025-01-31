import { Outlet } from "react-router";
import Nav from "../../components/nav/Nav";

const Login = () => {
    return (
        <div className="md:p-5 md:px-8">
           <Nav></Nav>
           <Outlet></Outlet>
           
        </div>
    );
};

export default Login;