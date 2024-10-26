import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Header = () => {
    return (
        <div className="w-[95%] md:w-[85%] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;