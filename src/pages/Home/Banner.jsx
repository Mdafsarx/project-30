import bannerImg from "../../assets/P3OLGJ1 copy 1.png"

const Banner = () => {
    return (
        <div className="bg-slate-100">
            <div className="flex items-center justify-between px-7 max-w-7xl mx-auto ">
            <div className="space-y-3">
                <h1 className="text-3xl lg:text-6xl font-bold">One Step <br />Closer To Your <br /> <span className="text-blue-500">Dream Job</span></h1>
                <p className="text-base hidden md:flex ">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn bg-blue-400 text-white">Get Started</button>
            </div>
            <figure className="w-1/2">
                <img src={bannerImg} alt="" className="w-full object-cover" />
            </figure>
        </div>
        </div>
    );
};

export default Banner;