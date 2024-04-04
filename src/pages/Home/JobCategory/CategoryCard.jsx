
const CategoryCard = ({data}) => {
    const {logo,category_name,availability}=data || {}
    return (
        <div>

            <div className="card  bg-slate-100 shadow-xl">
                <div className="card-body">
                    <img src={logo} alt="" className="w-20 bg-gray-200 p-4 rounded-xl" />
                    <p className="font-bold">{category_name}</p>
                    <p>{availability}</p>
                </div>
            </div>

        </div>
    );
};

export default CategoryCard;