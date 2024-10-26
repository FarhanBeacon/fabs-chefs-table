import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-[50px]">
            {/* Navigation Icon */}


            {/* Navbar Title */}
            <button className="btn btn-ghost text-[32px] font-bold">Recipe Calories</button>

            {/* Navbar Middle Section */}
            <div className="hidden md:flex">
                <button className="btn btn-ghost">Home</button>
                <button className="btn btn-ghost">Recipes</button>
                <button className="btn btn-ghost">About</button>
            </div>

            {/* Navbar End Section */}
            <div className="flex gap-4">
                <div className="relative hidden md:flex">
                    <button className="btn bg-transparent absolute start-0 text-base rounded-xl"><FaSearch /></button>
                    <input className="ps-14 pe-6 py-3 rounded-xl bg-[#150b2b0d] text-[#150b2bb3]" type="search" name="search" id="1" placeholder="Search" />
                </div>
                {/* Profile */}
                <button className="btn bg-transparent p-0 rounded-[50%]"><img className="w-[48px] h-[48px] rounded-[50%] bg-blue-400 border-4 border-green-400" src="profile.png" alt="profile" /></button>
            </div>
        </div>
    );
};

export default Navbar;