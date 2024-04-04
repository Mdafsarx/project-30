import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const JobCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        axios.get('./category.json')
            .then(data => setCategoryData(data.data))
    }, [])
    console.log(categoryData)
    return (
        <div className="max-w-7xl mx-auto space-y-7">

            <div className="text-center space-y-1 py-2">
                <h1 className="text-3xl font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-12">
                {
                    categoryData.map((category, i) => <CategoryCard key={i} data={category}/>)
                }
            </div>

        </div>
    );
};

export default JobCategory;