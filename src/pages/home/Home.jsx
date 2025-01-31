import { Outlet } from "react-router";
import Nav from "../../components/nav/Nav";
import bg from "../../assets/images/Coxbazar.png"
const Home = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center min-h-screen">
            <div className="bg-[#000000b2] min-h-screen md:p-5 md:px-8 space-y-3">
                <Nav></Nav>
                <div className=" content-center w-full text-white">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;