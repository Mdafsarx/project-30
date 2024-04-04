import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CategoryCard = ({data}) => {
    const {logo,category_name,availability}=data || {}
    return (
        <div>

            <div className="card  bg-slate-100 shadow-xl" data-aos="zoom-in" data-aos-duration="2000">
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