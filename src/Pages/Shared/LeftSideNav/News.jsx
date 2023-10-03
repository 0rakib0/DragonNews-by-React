import { FaCalendarAlt } from "react-icons/fa";

const News = ({ news }) => {
    const { title, author, image_url } = news
    return (
        <div className="mt-6">
            <img src={image_url} alt="" />
            <h1 className="mt-4 font-semibold">{title}</h1>
           
            <div className="flex justify-between items-center my-2">
                <p className="text-sm">Sports</p>
                <div className="flex justify-end gap-2">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p className="text-sm">{author.published_date}</p>
                </div>
            </div>
        </div>
    )
}


export default News