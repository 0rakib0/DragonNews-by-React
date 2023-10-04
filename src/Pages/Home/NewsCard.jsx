import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news
    return (
        <div className="card w-full bg-base-100 my-12 border-b-2 rounded-none mx-2">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {details.length > 200 ? <p>{details.slice(0, 200)} <Link className="font-semibold text-blue-500" to={`/new-details/${_id}`}>Read More</Link> </p>:
                <p>{details}</p>
            }
            </div>
        </div>
    );
};

export default NewsCard;