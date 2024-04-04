import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategory from "./JobCategory/JobCategory";

const Home = () => {
    return (
        <div className="space-y-16">
            <Banner/>
            <JobCategory/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;