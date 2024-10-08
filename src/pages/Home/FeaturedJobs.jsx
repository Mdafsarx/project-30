import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedJobs = () => {
    const [jobsData, setJobsData] = useState([])
    const [seeMore, SetSeeMore] = useState(4)

    useEffect(() => {
        axios.get('./Jobs.json')
            .then(data => setJobsData(data.data))
    }, [])
    console.log(jobsData)
    return (
        <div className="max-w-7xl mx-auto space-y-6">

            <div className="text-center space-y-1 py-2">
                <h1 className="text-3xl font-bold">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {
                    jobsData?.slice(0, seeMore).map((jobData, i) => <FeaturedCard key={i} jobData={jobData} />)
                }
            </div>
            <div className="flex justify-center">

                {
                    seeMore > 4 ? '' :
                <button className="btn btn-error text-white " onClick={() => SetSeeMore(jobsData.length)}>See More</button>
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;