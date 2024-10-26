import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner text-white text-center rounded-[24px] px-[10%] py-[8%]">
      <h1 className="text-[52px]">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="text-lg mb-10">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="flex justify-center gap-3">
        <button className="btn bg-[#0BE58A] rounded-[50px]">Explore Now</button>
        <button className="btn bg-transparent text-white rounded-[50px]">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
