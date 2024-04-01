// import background from "../../public/bg-2.png";
// style={{ backgroundImage: `url(${background})` }}
import hero_img from "../../public/hero_img.svg";
const Home = () => {
    return (
        <div className="bg-green-50">
            <div className="h-[100vh] flex flex-col-reverse lg:gap-10 lg:flex-row justify-center items-center max-w-screen-xl mx-auto px-5">
                {/* text column */}
                <div className="flex flex-col justify-center items-start h-full w-1/2r">
                    <h1 className="text-5xl md:text-7xl font-bold text-left text-green-300 mb-4">Effortless <br /> task delegation</h1>
                    <p className="text-lg text-left text-neutral-500">Streamline your tasks and stay focused on what matters most with us. <br /> Discover a new way to work smarter, not harder, with our innovative task management platform. </p>
                </div>
                {/* Image column */}
                <div className="w-1/2 h-full flex justify-center items-center">
                    <img src={hero_img} className="h-full rounded-full lg:rounded-full lg:pt-20" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;